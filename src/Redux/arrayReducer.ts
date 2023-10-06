const initialState = {
    dataMap: {}, // Initialize an empty object to store data with keys
  };
  
  const dataReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'ADD_DATA':
        const { key, data } = action.payload;
        return {
          ...state,
          dataMap: {
            ...state.dataMap,
            [key]: data, // Add data with the specified key
          },
        };
      case 'CLEAR_DATA':
        return {
          ...state,
          dataMap: {}, // Clear the data object
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  