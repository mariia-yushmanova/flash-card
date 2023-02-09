import Action from '../Types/Action';

export const init = {
  user: ''
};

export const userReducer = (
  state: { user:string } = init,
  action: Action
) : { user:string } => {
  switch (action.type) {
    case 'REGA':
      return {
        ...state,
        user: action.payload.user
      };
      case 'LOGOUT':
        return {
          ...state,
          user: ''
        };
        default: return state;
  }
};
