/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import { PopupTypes } from './types';

export const setPopup = (payload: Object) =>
  action(PopupTypes.setPopup, payload);


