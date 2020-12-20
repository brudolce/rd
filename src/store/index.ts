import { createStore, Store } from 'redux';
import { ThemeState } from './ducks/theme/types';
import rootreducer from './ducks/rootReducer';
import { PopupState } from './ducks/popup/types';

export interface ApplicationState {
  theme: ThemeState;
  popup: PopupState;
}

const store: Store = createStore(rootreducer);

export default store;
