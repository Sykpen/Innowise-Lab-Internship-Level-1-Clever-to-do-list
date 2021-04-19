import {
  ADD_NEW_TODO,
  FETCH_DATA_FOR_CURRENT_USER,
  SET_NEW_DATE,
} from "../constants";
import moment from "moment";

const initialState = {
  currentUserData: [],
  currentPickedData: moment().format("YYYY-MM-DD"),
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_CURRENT_USER:
      return {
        ...state,
        currentUserData: action.currentUserData,
      };
    case SET_NEW_DATE:
      return {
        ...state,
        currentPickedData: action.newDate,
      };
    default:
      return state;
  }
};
