import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import { todoApi } from "./services/todo-api";
import reactotron from "./reactotron";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./services/api";

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     [todoApi.reducerPath]: todoApi.reducer,
//   },
//   enhancers: [reactotron.createEnhancer()],
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(todoApi.middleware),
// });

export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    enhancers: [reactotron.createEnhancer()],
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
  });

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

export const store = createStore();
setupListeners(store.dispatch);
