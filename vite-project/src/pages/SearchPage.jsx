import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

import '@styles/SearchPage.css';

const SearchPage = () => {
	const [{ input }, dispatch] = useStateValue();

	return (
		<div className='search-page'>
			<div className='search-page__header'>
				<h1>{input}</h1>
			</div>

			<div className='search-page__results'></div>
		</div>
	);
};

export default SearchPage;
