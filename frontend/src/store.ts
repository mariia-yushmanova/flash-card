import { createStore, combineReducers } from 'redux';
import { cardReducer } from './features/Cards/cardReducer';
import { themeReducer } from './features/Themes/themeReducer';
// import { userReducer } from './features/Auth/reducer/userReducer';

const store = createStore(
  combineReducers({ cardState: cardReducer, themeState: themeReducer })

);

// userState: userReducer
export default store;

export type RootState = ReturnType<typeof store.getState>;
