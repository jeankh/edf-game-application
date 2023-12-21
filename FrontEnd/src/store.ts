import { legacy_createStore as createStore} from 'redux' 
import rootReducer from './reducers/rootReducer'; // Replace with your combined reducers file

const store = createStore(rootReducer);

export default store;
