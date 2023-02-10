import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/Auth/userReducer';
import { cardReducer } from './features/Cards/cardReducer';
import { themeReducer } from './features/Themes/themeReducer';

const store = createStore(
  combineReducers({
    cardState: cardReducer,
    themeState: themeReducer,
    userState: userReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
