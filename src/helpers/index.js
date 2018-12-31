import { initializeApp } from "firebase";
import { firebaseConfig } from "../libs";

export const registerApp = () => {
	initializeApp(firebaseConfig);
};
