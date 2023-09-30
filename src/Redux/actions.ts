// userActions.js
export const loginUser = () => ({
    type: 'LOGIN_USER',
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  

  // actions.js
export const setFormData = (key:any,formData:any) => ({
    type: 'SET_FORM_DATA',
    payload: {
        key:key,
        data:formData
    },
  });
  
  export const clearFormData = () => ({
    type: 'CLEAR_FORM_DATA',
  });
  