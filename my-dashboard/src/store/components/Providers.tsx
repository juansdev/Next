"use client";

import {Provider} from "react-redux";
import {store} from "@/store";
import React, {useEffect} from "react";
import {setListFavoritePokemon} from "@/store/slices/pokemon/pokemonSlice";

interface IProvidersProps {
  children: React.ReactNode
}

export const Providers = ({children}: IProvidersProps) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("listFavoritePokemon") ?? "{}");
    store.dispatch(setListFavoritePokemon(favorites));
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}