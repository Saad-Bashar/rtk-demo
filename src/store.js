import { configureStore } from "@reduxjs/toolkit";
import reactotron from "./reactotron";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./services/api";

export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    enhancers: [reactotron.createEnhancer()],
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const store = createStore();
setupListeners(store.dispatch);
