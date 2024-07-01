import React from "react";
import Sidebar from "../components/ui/Sidebar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}

export default RootLayout;
