// userReducer.js
const userReducer = (state = { userIsLoggedIn: false }, action:any) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { ...state, userIsLoggedIn: true };
      case 'LOGOUT_USER':
        return { ...state, userIsLoggedIn: false };
      default:
        return state;
    }
  };
  
  export default userReducer;
  