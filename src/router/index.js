import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, HiddenPage } from "../modules";
import FormAuth from "../modules/FormAuth";
import { ErrorComponent } from "../components";

export const Router = ({ parameter, userSignIn, userSignOut, isLoading, appToLoad }) => {
	//console.log(`Router parameter = ${parameter}`);
	return (
		<Switch>
			<Route exact path="/" render={() => <MainPage />} />
			<Route exact path="/mainpage" render={() => <MainPage />} />
			<Route exact path="/hiddenpage" render={() => <HiddenPage login={parameter} />} />
			<Route
				exact
				path="/formauth"
				render={() => (
					<FormAuth
						appToLoad={appToLoad}
						isLoading={isLoading}
						signInFunc={userSignIn}
						signOutFunc={userSignOut}
						login={parameter}
					/>
				)}
			/>
			<Route exact render={() => <ErrorComponent />} />
		</Switch>
	);
};
