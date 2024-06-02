"use client";

import {Provider} from "react-redux";
import {store} from "@/store";
import React from "react";

interface IProvidersProps {
  children: React.ReactNode
}

export const Providers = ({children}: IProvidersProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}