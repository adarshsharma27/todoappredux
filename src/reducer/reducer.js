const initialState = {
  userData: [],
};

export const AddReducer = (state = initialState, action) => {
  if (action.type === "ADD_DATA") {
    return {
      ...state,
      userData: [...state.userData, action.payload],
    };
  } else if (action.type === "DEL_DATA") {
    const deldata = state.userData.filter(
      (element, id) => id !== action.payload
    );
    return {
      ...state,
      userData: deldata,
    };
  } else if (action.type === "UPD_DATA") {
    const updatedata = state.userData.map((element, id) =>
      id === action.d ? action.payload : element
    );
    return {
      ...state,
      userData: updatedata,
    };
  } else {
    return {
      ...state,
    };
  }
};
