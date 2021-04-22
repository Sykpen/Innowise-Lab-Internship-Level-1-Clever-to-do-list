import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

export const register = (id, email) => ({
  type: REGISTER_USER,
  currentUserId: id,
  email,
});
export const loginUser = (id, email) => ({
  type: LOGIN_USER,
  currentUserId: id,
  email,
});
export const logoutUser = () => ({ type: LOGOUT_USER });
