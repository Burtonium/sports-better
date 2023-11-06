import React from "react";
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="container p-5">
        {children}
      </main>
    </div>
  );
};

export default Layout;
