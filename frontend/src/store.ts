import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/Auth/Registration/userReducer';
import { userLoginReducer } from './features/Auth/Authorization/userLoginReducer';
import { cardReducer } from './features/Cards/cardReducer';
import { themeReducer } from './features/Themes/themeReducer';

const store = createStore(
  combineReducers({
    cardState: cardReducer,
    themeState: themeReducer,
    userState: userReducer,
    userLogState: userLoginReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
