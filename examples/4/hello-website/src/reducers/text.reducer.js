import { GOLDILOCKS_ACTION, RESET_ACTION } from "../actions/text.action";

const INITIAL_STATE = "Welcome to the three bear's house";
const PROCESSING = "PROCESSING...";

export const textReducer = (previousState = INITIAL_STATE, action) => {
	switch (action.type) {
		case GOLDILOCKS_ACTION.PENDING:
			return PROCESSING;

		case GOLDILOCKS_ACTION.SUCCESS:
			return `${action.payload.message} ${action.payload.subtitle}`;

		case RESET_ACTION:
			return INITIAL_STATE;

		default:
			return previousState;
	}
}
