import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
	return (
		<div className={classes.answers}>
			<Checkbox text='Test answer test' className={classes.answer} />
		</div>
	);
};

export default Answers;
