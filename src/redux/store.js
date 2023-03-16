import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
