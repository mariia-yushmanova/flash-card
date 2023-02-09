import { createStore, combineReducers } from 'redux';

import { cardReducer } from './features/Cards/cardReducer';
import { themeReducer } from './features/Themes/themeReducer';

const store = createStore(
  combineReducers({ cardState: cardReducer, themeState: themeReducer })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
