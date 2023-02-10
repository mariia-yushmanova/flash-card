import Action from './types/Action';
import { State } from './types/types';

export const init = { cards: [], answer: { id: 0, text: '' } };
export const cardReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'INIT_CARDS':
      return {
        ...state,
        cards: action.payload,
      };
    case 'CHECK_ANSWER':
      return {
        ...state,
        answer: { id: action.payload.id, text: action.payload.text },
      };

    default:
      return state;
  }
};
