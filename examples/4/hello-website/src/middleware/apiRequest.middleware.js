export const apiRequestMiddleware = ({ dispatch }) => next => (action) => {
  const { type, payload } = action;
  if (type.apiRequest) {
    fetch(payload.path, {
      method: payload.method,
      headers: payload.headers
    }).then((rawResult) => rawResult.json()).then((payload) => dispatch({
      type: type.SUCCESS,
      payload
    })).catch((err) => console.log(err));

    const pendingAction = { ...action, type: type.PENDING };
    next(pendingAction);
  } else { 
  	next(action);
  }
}
