import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaMicrophone } from 'react-icons/fa';

import '@styles/Search.css';

const Search = () => {
	return (
		<form className='search-form'>
			<div className='search-form__input-wrapper'>
				<HiOutlineSearch className='search-form__icon' />
				<input className='search-form__input' />
				<FaMicrophone className='search-form__icon' />
			</div>

			<div className='search-form__buttons-wrapper'>
				<button className='search-form__button'>Google Search</button>
				<button className='search-form__button'>I'm Feeling Lucky</button>
			</div>
		</form>
	);
};

export default Search;
