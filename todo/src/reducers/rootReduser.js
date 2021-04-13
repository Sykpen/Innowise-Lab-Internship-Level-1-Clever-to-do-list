import { combineReducers } from "redux";
import { DataReducer } from "./dataReducer";


export const rootReducer = combineReducers({
    data: DataReducer
});