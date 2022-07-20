import React from 'react';

import SearchForm from '@components/forms/SearchForm/SearchForm';

import './ResultsHeader.css';

const ResultsHeader = () => {
	return (
		<div className='results-header'>
			<SearchForm />
		</div>
	);
};

export default ResultsHeader;
