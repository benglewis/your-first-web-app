export const apiRequestMiddleware = ({ dispatch }) => next => (action) => {
	/* 
		At this point you have everything hooked up, 
		but there's one big piece missing - the middleware. 
		If you play with your app right now, 
		you'll see that the reset button should work, 
		but that the `Goldilocks is coming` button will simply trigger an action with a type that is an object.
		This isn't correct.
		What you need to do is to trap actions that have `apiRequest` set to true within on their type,
		launch this request with `fetch` as shown in the slides,
		dispatching an action of type `type.PENDING` while the API call is made with the starting payload and 
		then launching an action of type `type.SUCCESS` with the results of the JSON call.

		Don't forget that actions which are not `apiRequest` still need to be passed along to the next middleware 
		using `next(action)`.

		Sidenote: This is JS, we don't care that most of the time `type` is a string and not an object
	*/
	next(action);
}
