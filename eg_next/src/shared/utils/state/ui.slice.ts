import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface prop {
  theme: number;
  scroll: number;
}
const initialState: prop = {
  theme: 0,
  scroll: 0,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<number>) => {
      state.theme = action.payload;
    },
    changeScroll: (state, action: PayloadAction<any>) => {
      state.scroll = action.payload;
    },
  },
});

export const { changeTheme, changeScroll } =
  uiSlice.actions;
export default uiSlice;
