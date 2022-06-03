import React from "react";
import singupImg from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";

const Illustration = () => {
	return (
		<div class={classes.illustration}>
			<img src={singupImg} alt='Signup' />
		</div>
	);
};

export default Illustration;
