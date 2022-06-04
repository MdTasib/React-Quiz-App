import React, { useState, useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

const useVideoList = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchVideo() {
			const db = getDatabase();
			const videoRef = ref(db, "videos");
			const videoQuery = query(videoRef, orderByKey());

			try {
				setLoading(true);
				setError(false);
				// request firebase database
				const snapshot = await get(videoQuery);
				setLoading(false);
				if (snapshot.exists()) {
					setVideos(prevVideos => {
						return [...prevVideos, Object.values(snapshot.val())];
					});
				} else {
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}

		fetchVideo();
	}, []);

	return { loading, error, videos };
};

export default useVideoList;
