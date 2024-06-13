"use client";

import React from "react";
import {SessionProvider} from "next-auth/react";

interface AuthProviderProps {
  children: React.ReactNode
}

export default function AuthProvider({children, ...rest}: AuthProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>);
}