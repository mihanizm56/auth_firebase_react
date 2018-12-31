import React from "react";

export const FormComponent = ({ input, type, label, meta: { error, touched } }) => {
	//console.log("check meta");
	//console.log(touched);
	return (
		<label>
			{label}:
			<div>
				<input {...input} type={type} />
				{error && touched && <p>{error}</p>}
			</div>
		</label>
	);
};
