import {
  REGISTER_USER,
  LOGIN_USER,
  REGISTER_ERROR,
  LOGOUT_USER,
  LOGIN_ERROR,
} from "../constants";
import { toast } from "react-toastify";

const initialState = {
  userId: "",
  currentUserEmail: "",
};

export const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      toast.success("Registration was succesessfull");
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
      toast.success("Logout was succesessfull");
      return {
        ...state,
        currentUserEmail: null,
        userId: null,
      };
    case LOGIN_ERROR:
      toast.error(`${action.errorText}`);
      return {
        ...state,
      };
    case REGISTER_ERROR:
      toast.error(`${action.errorText}`);
      return {
        ...state,
      };
    default:
      return state;
  }
};
