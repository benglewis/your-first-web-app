export const apiRequestMiddleware = ({ dispatch }) => next => (action) => {
	next(action);
}
