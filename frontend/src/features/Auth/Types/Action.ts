// import { type } from 'os';
import { State, User } from './types';

type Action =
  { type: 'REG_USER';payload: State; }
| { type: 'LOGOUT' }
| { type: 'LOG_USER';payload: State }
| { type: 'INIT_USERS';payload: User[] };

export default Action;
