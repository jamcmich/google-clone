import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from '@utils/keys';

const useSearch = (input) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	let parsedInput = input
		.toLowerCase()
		.trim()
		.replace(/[\W_]+/g, '+');

	const url =
		`https://google-search3.p.rapidapi.com/api/v1/search` +
		`/q=${parsedInput}` +
		`&num=10`;

	const options = {
		method: 'GET',
		headers: {
			'X-User-Agent': 'desktop',
			'X-Proxy-Location': 'US',
			'X-RapidAPI-Key': API_KEY,
			'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
		},
	};

	const getData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.get(url, options);
			console.log(
				`Remaining API calls: ${response.headers['x-ratelimit-search-remaining']}`
			);
			setData(response.data);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		if (input && !isLoading) getData();
	}, [input]);

	return { data, isLoading };
};

export { useSearch };
