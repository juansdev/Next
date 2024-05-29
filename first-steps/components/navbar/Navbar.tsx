import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components";

export interface INavItem {
  path: string,
  text: string
}
const navItems: INavItem[] = [
  {
    path: "/about",
    text: "About"
  },
  {
    path: "/pricing",
    text: "Pricing"
  },
  {
    path: "/contact",
    text: "Contact"
  }
];

export const Navbar = () => {
  return(
    <nav className={"flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded"}>
      <Link href={"/"} className={"flex items-center"}>
        <HomeIcon size={16} className={"mr-2"}/>
        <span>Home</span>
      </Link>
      <div className={"flex flex-1"}></div>
      {
        navItems.map(navItem=>(
          <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
        ))
      }
    </nav>
  );
}