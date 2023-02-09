import Action from './types/Action';
import { State } from './types/types';

export const init = { themes: [] };
export const themeReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'INIT_THEMES':
      return {
        ...state,
        themes: action.payload,
      };
    default:
      return state;
  }
};
