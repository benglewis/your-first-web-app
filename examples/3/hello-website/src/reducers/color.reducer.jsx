const INITIAL_STATE = "#fff";

export const colorReducer = (previousState = INITIAL_STATE, action) => {
	switch (action.type) {
		/** Add a case for your COLOR_CHANGE action here **/

		default:
			return previousState;
	}
}
