import { ADD_NEW_TODO, FETCH_DATA_FOR_CURRENT_USER } from "../constants";
import moment from 'moment'

const initialState = {
  currentUserData: [],
  currentPickedData: moment().format("YYYY-MM-DD")
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_CURRENT_USER:
      return {
        ...state,
        currentUserData: action.currentUserData,
      };
    default:
      return state;
  }
};
