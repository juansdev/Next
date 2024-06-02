import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ICounterState {
  count: number;
  isReady: boolean;
}

const initialState: ICounterState = {
  count: 0,
  isReady: false
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setStateCounter(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state) {
      state.count++;
    },
    subtractOne(state) {
      if (!state.count) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (state.count < 0) action.payload = 0;
      state.count = action.payload;
    }
  }
});

export const {addOne, subtractOne, resetCount, setStateCounter} = counterSlice.actions;

export default counterSlice.reducer;