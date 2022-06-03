import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../styles/Signup.module.css";

const SignupForm = () => {
	return (
		<Form className={classes.signup}>
			<TextInput type='text' placeholder='Enter name' icon='person' />
			<TextInput
				type='email'
				placeholder='Enter email'
				icon='alternate_email'
			/>
			<TextInput type='password' placeholder='Enter password' icon='lock' />
			<TextInput
				type='password'
				placeholder='Enter confirm password'
				icon='lock_clock'
			/>
			<Checkbox text='I agree to the Terms &amp; Conditions' />
			<Button>Submit now</Button>

			<div class='info'>
				Already have an account? <a href='login.html'>Login</a> instead.
			</div>
		</Form>
	);
};

export default SignupForm;
