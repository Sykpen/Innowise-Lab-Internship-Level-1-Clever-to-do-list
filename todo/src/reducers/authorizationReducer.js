import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  userId: "",
  currentUserEmail: "",
};

export const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        userId: action.currentUserId,
        currentUserEmail: action.email,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUserEmail: action.email,
        userId: action.currentUserId,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUserEmail: null,
        userId: null,
      };
    default:
      return state;
  }
};
