import {Sidebar} from "@/components";
import React from "react";
import {NotFoundTemplate} from "@/pokemon/components/NotFoundTemplate";

export default function NotFound() {
  return (
    <div
      className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar></Sidebar>
        <div className={"w-full text-slate-900"}>
          <NotFoundTemplate></NotFoundTemplate>
        </div>
      </div>
    </div>
  )
}