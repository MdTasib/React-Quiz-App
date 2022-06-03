import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import SignupForm from "../components/SignupForm";
import TextInput from "../components/TextInput";
import classes from "../styles/Signup.module.css";

const Signup = () => {
	return (
		<>
			<h1>Create an account</h1>

			<div className='column'>
				<Illustration />
				<SignupForm />
			</div>
		</>
	);
};

export default Signup;
