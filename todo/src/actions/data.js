import { ADD_NEW_TODO, FETCH_DATA_FOR_CURRENT_USER, SET_NEW_DATE } from "../constants";

export const addNewTodo = (todo) => ({ type: ADD_NEW_TODO, todo });

export const setCurrentUserData = (currentUserData) => ({type: FETCH_DATA_FOR_CURRENT_USER, currentUserData});

export const setNewDate = (date) => ({type: SET_NEW_DATE, newDate: date})
