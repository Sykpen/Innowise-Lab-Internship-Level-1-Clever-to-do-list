import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";
import { AuthorizationReducer } from "./authorizationReducer"
import { firebaseReducer } from "react-redux-firebase";


export const rootReducer = combineReducers({
    data: DataReducer,
    authorization: AuthorizationReducer,
    firebaseReducer: firebaseReducer
});