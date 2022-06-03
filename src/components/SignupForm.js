import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../styles/Signup.module.css";
import { Link } from "react-router-dom";

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
			<Button>
				<span>Submit now</span>
			</Button>

			<div class='info'>
				Already have an account? <Link to='/login'>Login</Link> instead.
			</div>
		</Form>
	);
};

export default SignupForm;
