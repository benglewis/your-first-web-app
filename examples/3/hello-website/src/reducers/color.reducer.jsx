import { COLOR_CHANGE } from "../actions/color.action";

const INITIAL_STATE = "#fff";

export const colorReducer = (previousState = INITIAL_STATE, action) => {
	switch (action.type) {
		case COLOR_CHANGE:
			return action.payload;

		default:
			return previousState;
	}
}
