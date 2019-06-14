import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { apiRequestMiddleware } from "./middleware/apiRequest.middleware";
import { rootReducer } from "./reducers/root.reducer";

const middleware = [logger, apiRequestMiddleware];
const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
