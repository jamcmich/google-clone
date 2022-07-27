/* Utilities */
import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

/* Components */
import ResultsHeader from './ResultsHeader/ResultsHeader';
import ResultsBody from './ResultsBody/ResultsBody';
import ResultsFooter from './ResultsFooter/ResultsFooter';

/* Styles */
import './ResultsPage.css';

const ResultsPage = () => {
	const [{ theme }] = useStateValue();

	return (
		<div className={`results-page ${theme}`}>
			<ResultsHeader />
			<ResultsBody />
			<ResultsFooter />
		</div>
	);
};

export default ResultsPage;
