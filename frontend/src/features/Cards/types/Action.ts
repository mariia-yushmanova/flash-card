import { Answer, Card } from './types';

type Action =
  | {
      type: 'INIT_CARDS';
      payload: Card[];
    }
  | {
      type: 'CHECK_ANSWER';
      payload: Answer;
    };

export default Action;
