import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "../../router";
import { loginRequest, signOutFirebase, loadingApp } from "../../actions";
import { registerApp } from "../../helpers";

class App extends Component {
	componentDidMount() {
		registerApp();
		console.log("app registered");
	}

	render() {
		const { loginState, userSignIn, appLoadingReducer, appToLoad, userSignOut } = this.props;
		const userIsLoggedIn = loginState.login || localStorage.login === "true";
		return (
			<>
				<button onClick={() => userIsLoggedIn && userSignOut()}>Выйти</button>
				<Router
					appToLoad={appToLoad}
					isLoading={appLoadingReducer.loading}
					parameter={userIsLoggedIn}
					userSignIn={userSignIn}
				/>
			</>
		);
	}
}

const mapStateToProps = store => {
	return { ...store };
};

const mapDispatchToProps = dispatch => {
	return {
		userSignIn(email, password) {
			dispatch(loginRequest(email, password));
		},
		userSignOut() {
			dispatch(signOutFirebase());
		},
		appToLoad() {
			dispatch(loadingApp());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
