import Action from './Types/Action';
import { State } from './Types/types';

const init = {
  user: {},
  message: '',
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'REG_USER':
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };

    default:
      return state;
  }
};