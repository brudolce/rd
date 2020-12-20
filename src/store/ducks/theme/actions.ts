/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import { ThemeTypes } from './types';

export const setTheme = (payload: Boolean) =>
  action(ThemeTypes.setTheme, payload);


