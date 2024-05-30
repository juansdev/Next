"use client";

import React, {ReactElement} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

export interface ISidebarMenuItemProps {
  path: string;
  icon: ReactElement<any, any>;
  title: string;
  subTitle: string;
}

export function SidebarMenuItem({path, icon, title, subTitle}: ISidebarMenuItemProps) {
  const currentPath = usePathname();
  return (
    <Link href={path}
          className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${path === currentPath ? "bg-blue-800" : ""}`}>
      {icon}
      <div className="flex flex-col">
        <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
        <span className="text-sm text-slate-500 hidden md:block">{subTitle}</span>
      </div>
    </Link>);
}