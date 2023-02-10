import { Theme } from './types';

type Action = {
  type: 'INIT_THEMES';
  payload: Theme[];
};
export default Action;
