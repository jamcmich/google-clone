import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaMicrophone } from 'react-icons/fa';

import '@styles/Search.css';

const Search = () => {
	return (
		<form className='search'>
			<div className='search__input-wrapper'>
				<HiOutlineSearch className='search__icon search__icon-search' />
				<input className='search__input' />
				<FaMicrophone className='search__icon search__icon-mic' />
			</div>

			<div className='search__buttons-wrapper'>
				<button className='search__buttons'>Google Search</button>
				<button className='search__buttons'>I'm Feeling Lucky</button>
			</div>
		</form>
	);
};

export default Search;
