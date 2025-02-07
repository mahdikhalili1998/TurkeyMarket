import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex flex-col justify-center text-center">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
