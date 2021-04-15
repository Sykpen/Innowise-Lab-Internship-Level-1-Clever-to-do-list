import { REGISTER_USER, LOGIN_USER, REGISTER_ERROR } from "../constants";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const initialState = {
  userEmail: ''
};

export const AuthorizationReducer = (state = initialState, action) => {

  switch (action.type) {
    case REGISTER_USER:
          toast.success("Registration was succesessfull");
      return {
        ...state,
        userEmail: action.email
      };
      case LOGIN_USER:
        toast.success("Login was succesessfull");
        return {
          ...state,
          userEmail: action.email
        };
        case REGISTER_ERROR:
          toast(`Error during registration`);
          return {
            ...state,
          };
    default:
      return state;
  }
};

export async function registerNewUser(dispatch, getState, email, password) {
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
      History.push("/");
    dispatch( {
      type: REGISTER_USER,
      email: email,
    })
  })
  .catch((err) => {
    dispatch ({
      type: REGISTER_ERROR,
      error: err,
    })
  });
}