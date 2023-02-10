import { User, State } from './types';

type Action =
| {
  type: 'REG_USER';
  payload: State;
}
| {
  type: 'INIT_USERS';
  payload: User[]
 };

export default Action;
