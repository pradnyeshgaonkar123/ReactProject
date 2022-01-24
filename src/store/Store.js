import rootReducer from '../reducers/RootReducer';
import { createStore } from 'redux';

const finalStore=createStore(rootReducer);  //here centralized store is created

export default finalStore;