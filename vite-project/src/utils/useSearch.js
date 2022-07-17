import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from '@utils/keys';

const useSearch = (input) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		console.log(input);
		if (input) {
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

			const getData = async () => {
				await axios
					.get(url, options)
					.then((response) => {
						console.log(response);
						setData(response);
					})
					.catch((error) => console.log(error));
			};

			// getData();
		}
	}, [input]);

	return { data };
};

export { useSearch };
