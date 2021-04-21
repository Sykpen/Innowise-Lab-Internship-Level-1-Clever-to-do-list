import {
  FETCH_DATA_FOR_CURRENT_USER,
  SET_NEW_DATE,
  SET_PICKED_TODO_INFO,
} from "../constants";

export const setCurrentUserData = (currentUserData) => ({
  type: FETCH_DATA_FOR_CURRENT_USER,
  currentUserData,
});

export const setNewDate = (date, index) => ({
  type: SET_NEW_DATE,
  newDate: date,
  activeDayIndex: index,
});

export const setPickedTodoInfo = (todoInfo) => ({
  type: SET_PICKED_TODO_INFO,
  title: todoInfo.title,
  description: todoInfo.description,
  date: todoInfo.date,
  id: todoInfo.key,
  status: todoInfo.isDone,
});
