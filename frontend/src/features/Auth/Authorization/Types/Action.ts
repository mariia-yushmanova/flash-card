import { State } from './types';

type Action = {
  type: 'LOG_USER';
  payload: State;
};

export default Action;
