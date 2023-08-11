import { themeActions } from "../reducers/themeReducers";

export const changeTheme = (isDark) => (dispatch) => {
  dispatch(themeActions.setTheme(isDark));
};
