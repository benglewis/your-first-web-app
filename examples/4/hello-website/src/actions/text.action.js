const apiAction = (name) => ({
	apiRequest: true,
	PENDING: `${name}_PENDING`,
	SUCCESS: `${name}_SUCCESS`
});

export const GOLDILOCKS_ACTION = apiAction("GOLDILOCKS_ACTION");
export const RESET_ACTION = "RESET_ACTION";

/*
	Note that we have added a new function called asyncAction.
	This allows you to define a cleaner interface for API calls.
	You will use this _instead_ of the *meta* field suggested in the slides.
*/
export const goldilocksAction = () => ({}); /* Implement this action */

export const resetAction = () => ({}); /* Implement this action */
