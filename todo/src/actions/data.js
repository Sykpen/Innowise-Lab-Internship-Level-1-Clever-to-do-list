import { ADD_NEW_TODO, FETCH_DATA_FOR_CURRENT_USER } from "../constants";

export const addNewTodo = (todo) => ({ type: ADD_NEW_TODO, todo });

export const setCurrentUserData = (currentUserData) => ({type: FETCH_DATA_FOR_CURRENT_USER, currentUserData})
