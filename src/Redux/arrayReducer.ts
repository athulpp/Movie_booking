const initialState = {
    dataArray: [], // Initialize an empty array to store data
  };
  
  const dataReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'ADD_DATA':
            const { key, data } = action.payload;
            // Create a new object with the key and array of data
            const newData = { [key]: [data] };
            return {
              ...state,
              dataArray: [...state.dataArray, newData], // Add the new data object to the array
             // Add data to the array
        };
      case 'REMOVE_DATA':
        // Remove data from the array based on some criteria (e.g., an ID)
        const updatedArray = state.dataArray.filter(
          (data:any) => data.id !== action.payload.id
        );
        return {
          ...state,
          dataArray: updatedArray,
        };
      case 'CLEAR_DATA':
        return {
          ...state,
          dataArray: [], // Clear the array
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  