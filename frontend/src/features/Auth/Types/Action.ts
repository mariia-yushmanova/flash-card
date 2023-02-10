// import { type } from 'os';
import { Res, State, User } from './types';

type Action =
  { type: 'REG_USER';payload: State; }
| { type: 'LOGOUT' }
| { type: 'LOG_USER';payload: State }

| { type: 'RES'; payload: Res }

| { type: 'INIT_USERS';payload: User[] };

export default Action;
