import React, { useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ViewProvider, useView } from './contexts/ViewContext';
import { ViewState } from './types';
import SunparadisePage from './components/SunparadisePage';
import SunparadiseLanding from './components/SunparadiseLanding';
import SEO from './components/SEO';

const AppContent = () => {
  const { view } = useView();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if ((window as any).Lenis) {
      const lenis = new (window as any).Lenis({
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical', 
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);
      (window as any).lenis = lenis;

      return () => {
        lenis.destroy();
        delete (window as any).lenis;
      };
    }
  }, []);

  return (
    <div className="bg-[#020202] text-white font-sans selection:bg-sunparadise-blue selection:text-white relative min-h-[100dvh]">
      <SEO />
      {view === ViewState.LANDING && <SunparadiseLanding />}
      {view === ViewState.SUNPARADISE_HANDOVER && <SunparadisePage />}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ViewProvider>
        <LazyMotion features={domAnimation}>
          <AppContent />
        </LazyMotion>
      </ViewProvider>
    </LanguageProvider>
  );
}

export default App;
