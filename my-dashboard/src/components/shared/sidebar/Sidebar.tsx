import React from "react";
import Image from 'next/image'
import {IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact} from 'react-icons/io5';
import {ISidebarMenuItemProps, SidebarMenuItem} from "@/components/shared";

const menuItems: ISidebarMenuItemProps[] = [{
  path: "/dashboard/main",
  icon: <IoBrowsersOutline size={40}/>,
  title: "Dashboard",
  subTitle: "Visualizacion"
}, {
  path: "/dashboard/counter",
  icon: <IoCalculator size={40}/>,
  title: "Counter",
  subTitle: "Contador Client Side"
}, {
  path: "/dashboard/pokemon",
  icon: <IoFootball size={40}/>,
  title: "Pokemon",
  subTitle: "Generation Static"
}, {
  path: "/dashboard/pokemonFavorites",
  icon: <IoHeartOutline size={40}/>,
  title: "Favorites",
  subTitle: "Global State"
}];
export function Sidebar() {
  return (
    <div id="menu"
         style={{width: '400px'}}
         className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex gap-2 ">
          <IoLogoReact></IoLogoReact>
          <span>Dashboard</span>
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image
                      src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                      width={40}
                      height={40}
                      alt="Picture of the author"
                      className="rounded-full w-8 h-8"
                    />
                </span>
          <span className="text-sm md:text-base font-bold">
                    Juan Serrano
                </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((menuItem, index) => <SidebarMenuItem key={index} {...menuItem}></SidebarMenuItem>)}
      </div>
    </div>);
}