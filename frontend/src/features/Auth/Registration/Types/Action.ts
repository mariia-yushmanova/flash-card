import { State } from './types';

type Action = {
  type: 'REG_USER';
  payload: State;
};

export default Action;
