import React from 'react';

import ResultsHeader from './ResultsHeader/ResultsHeader';
import ResultsBody from './ResultsBody/ResultsBody';
import ResultsFooter from './ResultsFooter/ResultsFooter';
import './ResultsPage.css';

const ResultsPage = () => {
	return (
		<div className='results-page'>
			<ResultsHeader />
			<ResultsBody />
			<ResultsFooter />
		</div>
	);
};

export default ResultsPage;
