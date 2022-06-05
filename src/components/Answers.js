import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange }) => {
	console.log(options);
	return (
		<div className={classes.answers}>
			{options?.map((option, index) => (
				<Checkbox
					key={index}
					className={classes.answer}
					text={option.title}
					value={index}
					checked={option.checked}
					onChange={e => handleChange(e, index)}
				/>
			))}
		</div>
	);
};

export default Answers;
