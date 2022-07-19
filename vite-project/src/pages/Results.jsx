import React, { useContext } from 'react';

import { StateContext, useStateValue } from '@contexts/StateProvider';
import { useSearch } from '@utils/useSearch';
import Form from '@components/Home/Body/Form';
import Content from '@components/Content';
import '@styles/Results.css';

const Results = () => {
	// const context = useContext(StateContext);
	const [{ input }, dispatch] = useStateValue();
	const { data } = useSearch(input);

	if (data) console.log(data);

	return (
		<div className='results-page'>
			<Form prevInput={input} />
			<div className='results-page__header'>
				<h1>{input}</h1>
			</div>

			<div className='results-page__content'>
				<Content />
			</div>
		</div>
	);
};

export default Results;
