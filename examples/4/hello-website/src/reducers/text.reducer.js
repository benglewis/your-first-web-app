const INITIAL_STATE = "Welcome to the three bear's house";
const PROCESSING = "PROCESSING...";

export const textReducer = (previousState = INITIAL_STATE, action) => {
	switch (action.type) {
		/* Implement the action handlers for `GOLDILOCKS_ACTION.PENDING`, `GOLDILOCKS_ACTION.SUCCESS` and `RESET_ACTION` */

		default:
			return previousState;
	}
}
