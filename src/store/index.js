import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { rootReducer } from "../reducers";
//import logger from "redux-logger";
import thunk from "redux-thunk";
export const history = createBrowserHistory();

export const store = createStore(
	rootReducer(history), // root reducer with router state
	{},
	compose(
		applyMiddleware(
			routerMiddleware(history), // for dispatching history actions
			thunk
			//logger
		)
	)
);
