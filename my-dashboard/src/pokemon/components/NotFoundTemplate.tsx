import Link from "next/link";
import React from "react";

interface INotFoundTemplateProps {
  title?: string;
  linkToRedirect?: React.JSX.Element
}

const linkToRedirectDefault = <Link href={"/dashboard/main"}>Go Home</Link>;

export const NotFoundTemplate = ({title, linkToRedirect}: INotFoundTemplateProps) => {
  if (!title) title = "Page Not Found";
  if (!linkToRedirect) linkToRedirect = linkToRedirectDefault;
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        {title}
      </div>
      <button className="mt-5">
        <div
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            {linkToRedirect}
          </span>
        </div>
      </button>
    </main>);
}