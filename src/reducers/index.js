import { combineReducers } from "redux";
import { loginReducer as loginState } from "./loginReducer";
import { appLoadingReducer } from "./appLoadingReducer";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		loginState,
		appLoadingReducer,
	});
