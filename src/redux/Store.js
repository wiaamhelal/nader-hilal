import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";
const Store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default Store;
