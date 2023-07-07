import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  userType: "employer",
};

const leftSideMenuBar = createSlice({
  name: "leftSideMenuBar",
  initialState,
  reducers: {
    showMenuBar(state, action) {
      if (action.payload === "admin") {
        state.userType = "admin";
      } else if (action.payload === "employer") {
        state.userType = "employer";
      } else {
        state.userType = "candidate";
      }
    },
  },
});
export const { showMenuBar } = leftSideMenuBar.actions;
export default leftSideMenuBar.reducer;
