import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from '@utils/keys';

const useSearch = (input) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		if (input) {
			setIsLoading(true);

			console.log(input);

			let parsedInput = input
				.toLowerCase()
				.trim()
				.replace(/[\W_]+/g, '+');

			const url =
				`https://google-search3.p.rapidapi.com/api/v1/search` +
				`/q=${parsedInput}` +
				`&num=5`;

			console.log(url);

			const options = {
				method: 'GET',
				headers: {
					'X-User-Agent': 'desktop',
					'X-Proxy-Location': 'US',
					'X-RapidAPI-Key': API_KEY,
					'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
				},
			};

			// await axios
			// 	.get(url, options)
			// 	.then((response) => {
			// 		console.log(response);
			// 		setData(response);
			// 	})
			// 	.catch((error) => console.log(error));

			let test = new Promise((resolve, reject) => {
				setTimeout(() => resolve(setData('some data...')), 5000)
			});

			setIsLoading(false);
		}
	};

	return { data };
};

export { useSearch };
