import { combineReducers } from "redux";
import { colorReducer } from "./color.reducer";

export const rootReducer = combineReducers({
	color: colorReducer
});
