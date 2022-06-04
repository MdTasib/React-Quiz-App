import React from "react";
import classes from "../styles/Video.module.css";

const Video = ({ title, noq, id }) => {
	return (
		<div class={classes.video}>
			<img
				src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
				alt={title}
			/>
			<p>{title}</p>
			<div class={classes.qmeta}>
				<p>{noq} Questions</p>
				<p>Score : {noq * 5}</p>
			</div>
		</div>
	);
};

export default Video;
