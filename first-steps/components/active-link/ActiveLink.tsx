"use client";
import {INavItem} from "@/components";
import {usePathname} from "next/navigation";
import Link from "next/link";
import style from "./ActiveLink.module.css";

export const ActiveLink = ({ path, text }: INavItem) => {
  const pathName = usePathname();

  return(
    <Link className={`${style.link} ${pathName === path && style['active-link']}`} href={path}>{text}</Link>
  )
}