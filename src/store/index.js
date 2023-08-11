import { configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "./reducers/themeReducers";

const themeFromStorage = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : null;

const initialState = {
  theme: { value: themeFromStorage },
};

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  preloadedState: initialState,
});

export default store;
