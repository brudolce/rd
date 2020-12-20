import { Reducer } from "redux";
import { ThemeState, ThemeTypes } from "./types";

const INITIAL_STATE: ThemeState = { Theme: false };
const reducer: Reducer<ThemeState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ThemeTypes.setTheme:
      return { ...state, Theme: payload };
    default:
      return state;
  }
};

export default reducer;
