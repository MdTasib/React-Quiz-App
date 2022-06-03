import React from "react";
import classes from "../styles/Summary.module.css";
import summaryImg from "../assets/images/success.png";

const Summary = () => {
	return (
		<div class={classes.summary}>
			<div class={classes.point}>
				<p class={classes.score}>
					Your score is <br />5 out of 10
				</p>
			</div>

			<div class={classes.badge}>
				<img src={summaryImg} alt='Success' />
			</div>
		</div>
	);
};

export default Summary;
