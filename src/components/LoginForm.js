import React from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";

const Login = () => {
	return (
		<Form style={{ height: "330px" }}>
			<TextInput
				type='text'
				placeholder='Enter email'
				icon='alternate_email'
				required
			/>

			<TextInput
				type='password'
				placeholder='Enter password'
				icon='lock'
				required
			/>

			<Button type='submit'>
				<span>Submit Now</span>
			</Button>

			<div className='info'>
				Don't have an account? <a href='/signup'>Signup</a> instead.
			</div>
		</Form>
	);
};

export default Login;
