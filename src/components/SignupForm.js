import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../styles/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const SignupForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [agree, setAgree] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { signup } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();
		// do validate
		if (password !== confirmPassword) {
			return setError("Dot't match password");
		}

		try {
			setError("");
			setLoading(true);
			await signup(email, password, name);
			navigate("/");
		} catch (err) {
			setLoading(false);
			setError("Failded to create an account");
		}
	}

	return (
		<Form className={classes.signup} onSubmit={handleSubmit}>
			<TextInput
				type='text'
				placeholder='Enter name'
				icon='person'
				value={name}
				onChange={e => setName(e.target.value)}
				required
			/>
			<TextInput
				type='email'
				placeholder='Enter email'
				icon='alternate_email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
			/>
			<TextInput
				type='password'
				placeholder='Enter password'
				icon='lock'
				value={password}
				onChange={e => setPassword(e.target.value)}
				required
			/>
			<TextInput
				type='password'
				placeholder='Enter confirm password'
				icon='lock_clock'
				value={confirmPassword}
				onChange={e => setConfirmPassword(e.target.value)}
				required
			/>
			<Checkbox
				text='I agree to the Terms &amp; Conditions'
				onChange={e => setAgree(e.target.value)}
				required
			/>
			<Button type='submit' disabled={loading}>
				<span>Submit now</span>
			</Button>

			{error && <p className='error'>{error}</p>}

			<div class='info'>
				Already have an account? <Link to='/login'>Login</Link> instead.
			</div>
		</Form>
	);
};

export default SignupForm;
