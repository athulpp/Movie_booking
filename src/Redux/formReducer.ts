// reducers.js
const initialState = {
 // Initialize an empty object to store form data
  };
  
  const formReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_FORM_DATA':
        return {
          ...state,
          [action.payload.key]: action.payload.data,
        };
      case 'CLEAR_FORM_DATA':
        return {
          ...state,
          formData: {}, // Clear form data
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  