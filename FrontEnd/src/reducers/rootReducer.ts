import { combineReducers } from 'redux';

import situationsReducer from './Ducks/situationDukck'



type RootState = {
  situations: ReturnType<typeof situationsReducer>;
  // Other slices of state if you have more reducers
};



const rootReducer = combineReducers({
  situations: situationsReducer,
  // Other reducers...
});

export default rootReducer;
export type { RootState };
