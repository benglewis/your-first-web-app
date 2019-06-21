const apiAction = (name) => ({
	apiRequest: true,
	PENDING: `${name}_PENDING`,
	SUCCESS: `${name}_SUCCESS`
});

export const GOLDILOCKS_ACTION = apiAction("GOLDILOCKS_ACTION");
export const RESET_ACTION = "RESET_ACTION";

export const goldilocksAction = () => ({
	type: GOLDILOCKS_ACTION,
	payload: {
		method: "GET",
		path: `https://www.foaas.com/off/Goldilocks/Three Little Bears`,
		headers: new Headers({
			"Accept": "application/json"
		})
	}
});

export const resetAction = () => ({
	type: RESET_ACTION
});
