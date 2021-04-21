import {
  FETCH_DATA_FOR_CURRENT_USER,
  SET_NEW_DATE,
  SET_PICKED_TODO_INFO,
} from "../constants";
import moment from "moment";

const initialState = {
  currentUserData: [],
  currentPickedData: moment().format("YYYY-MM-DD"),
  pickedTodoTitle: "",
  pickedTodoDescription: "",
  pickedTodoDate: "",
  pickedTodoId: "",
  pickedTodoStatus: "",
  activeDayIndex: 0
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_FOR_CURRENT_USER:
      return {
        ...state,
        currentUserData: action.currentUserData,
      };
    case SET_NEW_DATE:
      console.log(action)
      return {
        ...state,
        currentPickedData: action.newDate,
        activeDayIndex: action.activeDayIndex
      };
    case SET_PICKED_TODO_INFO:
      return {
        ...state,
        pickedTodoTitle: action.title,
        pickedTodoDescription: action.description,
        pickedTodoDate: action.date,
        pickedTodoId: action.id,
        pickedTodoStatus: action.status
      };
    default:
      return state;
  }
};
