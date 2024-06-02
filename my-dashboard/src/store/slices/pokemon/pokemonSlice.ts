import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISimplePokemon} from "@/pokemon";

export interface IListPokemonState {
  "favorites": {
    [key: string]: ISimplePokemon
  }
}

// const getInitialState = (): IListPokemonState => {
//   if(typeof localStorage === "undefined") return {"favorites": {}};
//   return JSON.parse(localStorage.getItem("listFavoritePokemon") ?? "{}");
// }

const initialState: IListPokemonState = {
  favorites: {}
}

const counterSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setListFavoritePokemon(state, action: PayloadAction<{ [key: string]: ISimplePokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<ISimplePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;
      if (!!state["favorites"][id]) delete state["favorites"][id];
      else state["favorites"][id] = pokemon;

      // TODO: No se debe de hacer en Redux
      localStorage.setItem("listFavoritePokemon", JSON.stringify(state.favorites));
    }
  }
});

export const {toggleFavorite, setListFavoritePokemon} = counterSlice.actions;

export default counterSlice.reducer;