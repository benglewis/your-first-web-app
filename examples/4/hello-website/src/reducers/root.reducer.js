import { combineReducers } from "redux";
import { textReducer } from "./text.reducer";

export const rootReducer = combineReducers({
	text: textReducer
});
