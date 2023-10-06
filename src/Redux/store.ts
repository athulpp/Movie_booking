// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';
import arrayReducer from './arrayReducer';

// Define your initial state and reducers
const initialState = {
    userReducer: {
      userIsLoggedIn: false,
    },
}
const rootReducer = combineReducers({
  userReducer:userReducer,form:formReducer,bookedList:arrayReducer
});

// Create the Redux store
const store = createStore(rootReducer, initialState);

export default store;
