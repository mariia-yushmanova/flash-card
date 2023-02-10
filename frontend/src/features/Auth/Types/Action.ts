// import { type } from 'os';
import { State } from './types';

type Action =
  { type: 'REG_USER';payload: State; }
| { type: 'LOGOUT' }
| { type: 'LOG_USER';payload: State };

export default Action;
