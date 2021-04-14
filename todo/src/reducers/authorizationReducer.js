import { REGISTER_USER } from "../constants";

const initialState = {
  userEmail: ''
};

export const AuthorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      console.log("Удачно зарегался");
      return {
        ...state,
        userEmail: action.email
      };
    default:
      return state;
  }
};
