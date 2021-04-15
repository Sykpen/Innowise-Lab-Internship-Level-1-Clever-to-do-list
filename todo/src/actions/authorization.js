import { REGISTER_USER, LOGIN_USER, REGISTER_ERROR } from "../constants";
import { auth } from "../firebase";

export const register = (email) => ({ type: REGISTER_USER, email });
export const registerError = (error) => ({ type: REGISTER_ERROR, error });
export const loginUser = (email) => ({ type: LOGIN_USER, email });

export const newRegister = (email, password) => async (dispatch) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => dispatch(register(email)));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export const UserLogin = (email, password) => async (dispatch) => {
  try {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch(loginUser(email)));
  } catch (error) {console.log(error)}
};

// export const RegisterUser = (email, password) => {
//   return (dispatch) => {
//     console.log("слой 2");
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         dispatch(register(email));
//       })
//       .catch((err) => {
//         dispatch(register(err));
//       });
//   };
// };
