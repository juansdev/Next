import {Action, Dispatch, MiddlewareAPI} from "@reduxjs/toolkit";
import {RootState} from "@/store";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    console.log(action);
    if (action.type === "pokemon/toggleFavorite") {
      const {pokemon} = state.getState() as RootState;
      localStorage.setItem('listFavoritePokemon', JSON.stringify(pokemon));
      return;
    }
  }
}