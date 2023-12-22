import {User } from '../../types/models/UserResultat'
// Action Types
const UPDATE = 'update';
const RESET_STATE = 'RESET_STATE';


// Action Creators
interface UpdateAction {
  type: typeof UPDATE;
  field: string;
  value: string | boolean;
}

interface ResetStateAction {
  type: typeof RESET_STATE;
}

export const resetState = (): ResetStateAction => ({
  type: RESET_STATE,
});



export const update = (field: string, value: string | boolean | number) => ({
    type: UPDATE,
    field,
    value,
  });

// State and Reducer


const initialStateUser: User  = {
  name: '',
  nickname: '',
  email: '',
  age: 0,
  score: 0,
};

type ActionTypes = UpdateAction | ResetStateAction;

const userReducer = (state = initialStateUser, action: ActionTypes): User => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case RESET_STATE:
      return initialStateUser;
    default:
      return state;
  }
};

export default userReducer;
