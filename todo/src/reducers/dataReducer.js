import { ADD_NEW_TODO } from "../constants";

const initialState = {
  oneDayData: [{title: 'Task 1'}, {title: 'Task 2'}, {title: 'Task 3'}],
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        oneDayData: [...state.oneDayData, ...[{title: "Новая тудушка"}]],
      };
    default:
      return state;
  }
};
