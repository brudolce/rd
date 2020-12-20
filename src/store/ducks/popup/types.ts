export enum PopupTypes {
  setPopup = "@setPopup",
}

export interface PopupState {
  Popup: { visibile: boolean; message: string };
}
