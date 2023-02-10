// import { type } from 'os';
import { Res, State } from './types';

type Action =
  { type: 'REG_USER';payload: State; }
| { type: 'LOGOUT' }
| { type: 'LOG_USER';payload: State }
| { type: 'RES'; payload: Res };

export default Action;
