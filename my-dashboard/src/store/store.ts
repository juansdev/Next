import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/store/slices/counter/counterSlice";
import pokemonReducer from "@/store/slices/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;