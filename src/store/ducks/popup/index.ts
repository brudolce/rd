import { Reducer } from "redux";
import { PopupState, PopupTypes } from "./types";

const INITIAL_STATE: PopupState = {
  Popup: { visibile: false, message: "" },
};
const reducer: Reducer<PopupState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case PopupTypes.setPopup:
      return { ...state, Popup: payload };
    default:
      return state;
  }
};

export default reducer;
