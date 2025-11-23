// interface/index.tsx

import { ReactNode } from "react";

// Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}

// pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

