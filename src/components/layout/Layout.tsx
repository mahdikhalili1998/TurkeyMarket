import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
