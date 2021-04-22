import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";
import { AuthorizationReducer } from "./authorizationReducer";
import { ToastReducer } from "./toastReducer";

export const rootReducer = combineReducers({
  data: DataReducer,
  authorization: AuthorizationReducer,
  toast: ToastReducer,
});
