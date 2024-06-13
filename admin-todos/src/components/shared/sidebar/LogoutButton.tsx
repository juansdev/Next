"use client";

import {CiLogout} from "react-icons/ci";
import {signIn, signOut, useSession} from "next-auth/react";
import {IoKeyOutline, IoShieldOutline} from "react-icons/io5";
import React from "react";

export const LogoutButton = () => {
  const {data: session, status} = useSession();
  let buttonInnerHTML: React.ReactNode;
  let callbackButton: Function;

  switch (status) {
    case "loading":
      buttonInnerHTML = <>
        <IoShieldOutline/>
        <span className={"group-hover:text-gray-700"}>Wait...</span>
      </>;
      break;
    case "unauthenticated":
      callbackButton = signIn;
      buttonInnerHTML = <>
        <IoKeyOutline/>
        <span className={"group-hover:text-gray-700"}>Login</span>
      </>;
      break;
    default:
      callbackButton = signOut;
      buttonInnerHTML = <>
        <CiLogout/>
        <span className={"group-hover:text-gray-700"}>Logout</span>
      </>;
      break;
  }

  return (
    <button onClick={() => callbackButton()}
            className={"px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"}>
      {buttonInnerHTML}
    </button>
  );
}