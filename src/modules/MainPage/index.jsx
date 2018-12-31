import React from "react";
import { Paragraph } from "../../components";
import { Link } from "react-router-dom";

export const MainPage = () => {
	console.log("MainPage");
	return (
		<>
			<Paragraph text="Hello InitPage !" />
			<Link to="/hiddenpage">To hidden page</Link>
		</>
	);
};
