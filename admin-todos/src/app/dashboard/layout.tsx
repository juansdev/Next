import React from "react";
import {Sidebar, TopMenu} from "@/components/shared";

export default function DashboardLayout({children}: { children: React.ReactNode; }) {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen bg-gray-300">
        <TopMenu></TopMenu>
        <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">
          {children}
        </div>
      </div>
    </>
  );
}