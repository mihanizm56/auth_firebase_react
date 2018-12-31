import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormComponent } from "../../components";
import { Redirect } from "react-router-dom";

class FormAuthComponent extends Component {
	signInUser = ({ email, password }) => {
		const { signInFunc, appToLoad } = this.props;
		appToLoad();
		signInFunc(email, password);
	};

	render() {
		const { handleSubmit, login, isLoading } = this.props;

		if (login || localStorage.login === "true") return <Redirect to="/hiddenPage" />;

		return isLoading ? (
			<p>Loading</p>
		) : (
			<>
				<form className="form" onSubmit={handleSubmit(this.signInUser)}>
					<Field component={FormComponent} label="мыло" type="text" name="email" />
					<Field component={FormComponent} label="пароль" type="password" name="password" />
					<button type="submit">Отправить</button>
				</form>
			</>
		);
	}
}

export default reduxForm({
	validate: ({ email, password }) => {
		const errors = {};
		if (!email || email === "") errors.email = "Failed email";
		if (!password || password === "") errors.password = "Failed password";
		return errors;
	},
	form: "auth",
})(FormAuthComponent);
