import React, { useState } from "react";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
	const { videos, loading, error } = useVideoList();

	return (
		<div className='videos'>
			{videos.length > 0 &&
				videos[0].map(video =>
					video.noq > 0 ? (
						<Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
							<Video title={video.title} id={video.youtubeID} noq={video.noq} />
						</Link>
					) : (
						<Video title={video.title} id={video.youtubeID} noq={video.noq} />
					)
				)}
			{!loading && videos.length === 0 && <div>No data found!</div>}
			{error && <div>There was an error!</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
};

export default Videos;
