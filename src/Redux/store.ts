// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';

// Define your initial state and reducers
const initialState = {
    userReducer: {
      userIsLoggedIn: false,
    },
}
const rootReducer = combineReducers({
  userReducer:userReducer,form:formReducer
});

// Create the Redux store
const store = createStore(rootReducer, initialState);

export default store;
