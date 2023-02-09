import { Res } from './User';

type Action =
| { type: 'REGA'; payload: Res }
| { type: 'LOGOUT' };

export default Action;
