"use client";

import {usePathname} from "next/navigation";
import React from "react";
import Link from "next/link";

export interface ISidebarItemProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({title, href, icon}: ISidebarItemProps) => {
  const currentUrl = usePathname();
  const isActive = currentUrl === href;
  return (
    <li>
      <Link href={`${href}`}
            className={`px-4 py-3 flex items-center space-x-4 ${isActive ?
              "rounded-xl relative text-white bg-gradient-to-r from-sky-600 to-cyan-400" :
              "rounded-md text-gray-600 group"}`}>
        {icon}
        <span className={isActive ? "-mr-1 font-medium" : "group-hover:text-gray-700"}>{title}</span>
      </Link>
    </li>
  );
}