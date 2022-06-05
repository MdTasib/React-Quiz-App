import React, { useState, useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

const useQuestions = videoID => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function fetchVideo() {
			const db = getDatabase();
			const quizRef = ref(db, "quiz/" + videoID + "/questions");
			const quizQuery = query(quizRef, orderByKey());

			try {
				setLoading(true);
				setError(false);
				// request firebase database
				const snapshot = await get(quizQuery);
				setLoading(false);
				if (snapshot.exists()) {
					setQuestions(prevQuesions => {
						return [...prevQuesions, Object.values(snapshot.val())];
					});
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}

		fetchVideo();
	}, [videoID]);

	return { loading, error, questions };
};

export default useQuestions;
