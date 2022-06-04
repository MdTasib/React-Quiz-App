import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { login } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			navigate("/");
		} catch (err) {
			setLoading(false);
			setError("Failded to login");
		}
	}

	return (
		<Form style={{ height: "330px" }} onSubmit={handleSubmit}>
			<TextInput
				type='text'
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

			<Button type='submit' disabled={loading}>
				<span>Submit Now</span>
			</Button>

			{error && <p className='error'>{error}</p>}

			<div className='info'>
				Don't have an account? <Link to='/signup'>Signup</Link> instead.
			</div>
		</Form>
	);
};

export default Login;
