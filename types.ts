export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

// Added ChatMessage interface to fix import error in ChatWidget.tsx
export interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export enum ViewState {
  LANDING = "LANDING",
  SUNPARADISE_HANDOVER = "SUNPARADISE_HANDOVER",
}
