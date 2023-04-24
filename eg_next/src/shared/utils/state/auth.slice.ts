import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { loggedIn: boolean } = {
  loggedIn: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeLogin: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { changeLogin } = authSlice.actions;
export default authSlice;
