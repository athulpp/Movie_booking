interface DataItem {
  key: string;
  data: any[]; // Replace 'any' with the actual type of your data
}

interface DataState {
  dataArray: DataItem[];
}

const initialState: DataState = {
  dataArray: [],
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_DATA':
      const { key, data } = action.payload;
      // Find the index of existing data with the same key in dataArray
      const existingIndex = state.dataArray.findIndex((item) => item.key === key);

      if (existingIndex !== -1) {
        // If data with the same key exists, update it
        const updatedDataArray = [...state.dataArray];
        const existingData = updatedDataArray[existingIndex];
        existingData.data.push(data);

        return {
          ...state,
          dataArray: updatedDataArray,
        };
      } else {
        // If data with the same key doesn't exist, add a new entry
        return {
          ...state,
          dataArray: [
            ...state.dataArray,
            { key, data: [data] },
          ],
        };
      }

    case 'REMOVE_DATA':
      // Remove data from the array based on some criteria (e.g., an ID)
      const updatedArray = state.dataArray.map((item) => ({
        ...item,
        data: item.data.filter((d) => d.id !== action.payload.id),
      }));
      return {
        ...state,
        dataArray: updatedArray,
      };

    case 'CLEAR_DATA':
      return {
        ...state,
        dataArray: [],
      };

    default:
      return state;
  }
};

export default dataReducer;
