import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = { value: null };

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    setTheme(state, action) {
      state.value = action.payload;
    },
  },
});

const themeActions = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export { themeActions, themeReducer };
