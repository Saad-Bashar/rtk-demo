import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light", // set initial theme mode
  },
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// selector
export const selectTheme = state => state.theme.mode;

export default themeSlice.reducer;
