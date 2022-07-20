import React from 'react';

import { useStateValue } from '@contexts/StateProvider';
import { useSearch } from '@utils/useSearch';

import './ResultsBody.css';

const ResultsBody = () => {
	const [{ input }] = useStateValue();
	const { data } = useSearch(input);

	if (data) console.log(data);

	return (
		<div className='results-body'>
			<h1>{input}</h1>
		</div>
	);
};

export default ResultsBody;
