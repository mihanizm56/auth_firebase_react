import { loginSuccess, signOut } from "../constants";
import firebase from "firebase";
//import { authentificate} from '../helpers'

export function loginCorrect() {
	console.log("test loginSuccess");
	localStorage.login = "true";
	return {
		type: loginSuccess,
	};
}

export function loadingApp() {
	console.log("test loadingApp");
	return {
		type: "APP_IS_LOADING",
	};
}

export function loadingAppDone() {
	console.log("test loadingAppDone");
	return {
		type: "APP_HAS_LOADED",
	};
}

export function signOutLocal() {
	console.log("test signOut");
	localStorage.login = "";
	return {
		type: signOut,
	};
}

// export function signUpFirebase(email, password) {
// 	console.log("check signUpFirebase request");
// 	console.log(`email = ${email}, password = ${password}`);
// 	return dispatch => {
// 		if (email !== "" && password !== "") {
// 			return dispatch => {
// 				firebase
// 					.auth()
// 					.createUserWithEmailAndPassword(email, password)
// 					.then(() => dispatch(loginCorrect()))
// 					.then(() => dispatch(loadingAppDone()))
// 					.catch(function(error) {
// 						dispatch(loadingAppDone());
// 						alert(error.message);
// 					});
// 			}; 																						////не даёт создать в базе
// 		}
// 	};
// }

export function signOutFirebase() {
	return dispatch => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch(signOutLocal());
				console.log("signOutUser done");
			})
			.catch(function(error) {
				console.error("signOutFirebase failed");
			});
	};
}

export function loginRequest(email, password) {
	console.log("check loginRequest");
	console.log(`email = ${email}, password = ${password}`);
	if (email !== "" && password !== "") {
		return dispatch => {
			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => dispatch(loginCorrect()))
				.then(() => dispatch(loadingAppDone()))
				.catch(error => {
					dispatch(loadingAppDone());
					alert(error.message);
				});
		};
	}
}
