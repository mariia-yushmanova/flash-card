import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/Auth/reducer/userReducer';

const store = createStore(
  combineReducers({
    userState: userReducer
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
