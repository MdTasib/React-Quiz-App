import React from "react";
import Illustration from "../components/Illustration";
import Login from "../components/LoginForm";

const LoginForm = () => {
	return (
		<>
			<h1>Login to your account</h1>

			<div className='column'>
				<Illustration />
				<Login />
			</div>
		</>
	);
};

export default LoginForm;
