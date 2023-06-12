import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import reactotron from "./reactotron";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  enhancers: [reactotron.createEnhancer()],
});
