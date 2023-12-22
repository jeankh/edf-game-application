import { combineReducers } from 'redux';
import situationsReducer from './Ducks/situationDukck';
import userReducer from './Ducks/certificationDukck';
import { User } from '../types/models/UserResultat';

// Assuming 'User' defines the shape of the state managed by userReducer
type RootState = {
  situations: ReturnType<typeof situationsReducer>;
  user: User;
  // Other slices of state if you have more reducers
};

const rootReducer = combineReducers({
  situations: situationsReducer,
  user: userReducer, 
  // Other reducers...
});

export default rootReducer;
export type { RootState };
