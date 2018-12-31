import { loginSuccess, signOut } from "../constants";

const initState = {
	login: false,
};

export const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case loginSuccess:
			return { ...state, login: true };
		case signOut:
			return { ...state, login: false };

		default:
			return state;
	}
};
