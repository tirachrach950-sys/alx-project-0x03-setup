import type { LayoutProps } from "@/interface";

import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
// Move this interface to interface/index.ts
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

