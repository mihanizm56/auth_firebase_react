import { appIsLoading, appHasLoaded } from "../constants";

const initState = {
	loading: false,
};

export const appLoadingReducer = (state = initState, action) => {
	switch (action.type) {
		case appIsLoading:
			return { ...state, loading: true };
		case appHasLoaded:
			return { ...state, loading: false };

		default:
			return state;
	}
};
