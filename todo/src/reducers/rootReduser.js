import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";
import { AuthorizationReducer } from "./authorizationReducer"


export const rootReducer = combineReducers({
    data: DataReducer,
    authorization: AuthorizationReducer,
    
});