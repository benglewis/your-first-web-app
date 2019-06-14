const apiAction = (name) => ({
	apiRequest: true,
	PENDING: `${name}_PENDING`,
	SUCCESS: `${name}_SUCCESS`
});

export const GOLDILOCKS_ACTION = apiAction("GOLDILOCKS_ACTION");
export const RESET_ACTION = "RESET_ACTION";

export const goldilocksAction = () => ({});

export const resetAction = () => ({});
