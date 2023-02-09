import { Card } from './types';

type Action =
  | {
      type: 'INIT_CARDS';
      payload: Card[];
    }
  | {
      type: 'CHECK_ANSWER';
      payload: Card;
    };

export default Action;
