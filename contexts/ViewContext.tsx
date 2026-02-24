
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ViewState } from '../types';

interface ViewContextType {
  view: ViewState;
  setView: (view: ViewState) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

// Mapping between ViewState and URL paths
const viewToPath: Record<ViewState, string> = {
  [ViewState.LANDING]: '/',
  [ViewState.B2B_CARPORTS]: '/b2b',
  [ViewState.STRUCTURES]: '/structures',
  [ViewState.TECHNOLOGY]: '/technology',
  [ViewState.ATMOSPHERE]: '/atmosphere',
  [ViewState.SUSTAINABILITY]: '/sustainability',
  [ViewState.CAREERS]: '/careers',
  [ViewState.PRESS]: '/press',
  [ViewState.ABOUT]: '/about',
  [ViewState.CONTACT]: '/contact',
  [ViewState.PRIVACY]: '/privacy',
  [ViewState.CONFIGURATOR]: '/configure',
  [ViewState.SUNPARADISE_HANDOVER]: '/cubo-confirmed',
  [ViewState.SUNPARADISE_LP]: '/sunparadise',
  [ViewState.AURORA_LP]: '/aurora',
  [ViewState.WIZARD]: '/studio-wizard',
};

// Inverse mapping for handling URL -> ViewState
const pathToView: Record<string, ViewState> = Object.entries(viewToPath).reduce(
  (acc, [view, path]) => ({ ...acc, [path]: view as ViewState }),
  {}
);

export const ViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state by reading the current hash to prevent flash of Landing page
  const [view, setViewState] = useState<ViewState>(() => {
    if (typeof window !== 'undefined') {
      let hash = window.location.hash.slice(1); // Remove the '#'
      if (!hash) hash = '/'; // Default to root
      return pathToView[hash] || ViewState.LANDING;
    }
    return ViewState.LANDING;
  });

  // Synchronize state with current URL hash and handle hash changes (Back/Forward)
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.slice(1);
      if (!hash) hash = '/';
      
      const matchedView = pathToView[hash] || ViewState.LANDING;
      setViewState(matchedView);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setView = (newView: ViewState) => {
    const newPath = viewToPath[newView];
    if (newPath) {
      // Update browser URL hash (e.g. #/about)
      window.location.hash = newPath;
    }
    setViewState(newView);
    
    // Ensure scroll reset on every navigation
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};
