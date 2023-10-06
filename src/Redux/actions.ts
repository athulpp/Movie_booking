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
  
  // Action creator for adding data to the dataArray
// Action to add data with a key
export const addData = (key:any, data:any) => {
    return {
      type: 'ADD_DATA',
      payload: {
        key,
        data,
      },
    };
  };
  

  
  // Action to clear all data
  export const clearData = () => {
    return {
      type: 'CLEAR_DATA',
    };
  };
  
  