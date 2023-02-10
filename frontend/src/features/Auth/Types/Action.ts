import { State } from './types';

type Action =
  | { type: 'REG_USER'; payload: State }
  | { type: 'LOGOUT' }
  | { type: 'LOG_USER'; payload: State }
  | { type: 'CHECK_SCORE'; payload: State };

export default Action;
