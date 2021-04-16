import { REGISTER_USER, LOGIN_USER, REGISTER_ERROR, LOGOUT_USER, LOGIN_ERROR } from "../constants";

export const register = (id, email) => ({ type: REGISTER_USER, currentUserId: id, email });
export const registerError = (error) => ({ type: REGISTER_ERROR, error });
export const loginUser = (id, email) => ({ type: LOGIN_USER, currentUserId: id, email });
export const logoutUser = () => ({ type: LOGOUT_USER});
export const loginError = (errorText) => ({type: LOGIN_ERROR, errorText})


