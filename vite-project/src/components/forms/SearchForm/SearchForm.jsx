import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdSearch as Search } from 'react-icons/io';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/Reducer';
import { Microphone, Clear } from '@components/tooltips/Tooltips';

import './SearchForm.css';

const SearchForm = () => {
	const navigate = useNavigate();
	const [{ input, theme }, dispatch] = useStateValue();
	const [searchInput, setSearchInput] = useState('');
	const [style, setStyle] = useState('');

	const submitForm = (event) => {
		event.preventDefault();

		console.log('submitForm()');

		if (searchInput.trim() && searchInput !== input) {
			dispatch({
				type: actionTypes.SET_SEARCH_INPUT,
				input: searchInput,
			});

			if (location.pathname !== '/results') navigate('/results');
		}
	};

	const handleChange = (event) => {
		setSearchInput(event.target.value);
	};

	const clearInput = () => {
		console.log('clearInput()');
		setSearchInput('');
	};

	const prependSearchInput = () => {
		console.log('test');
		if (input && location.pathname === '/results')
			setSearchInput(
				input
					.toLowerCase()
					.trim()
					.replace(/[\W_]+/g, ' ')
			);
	};

	const handleStyles = () => {
		switch (location.pathname) {
			case '/':
				setStyle('search');
				break;
			case '/results':
				setStyle('results');
				break;
			default:
				console.log('no styles could be applied');
				break;
		}
	};

	useEffect(() => {
		prependSearchInput();
		handleStyles();
	}, [input]);

	return location.pathname === '/results' ? (
		<form className='results-page__form' onSubmit={submitForm}>
			<div className='results-page__form-group'>
				<input
					className='results-page__input'
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>
				<Clear
					clearInput={clearInput}
					setTheme={theme}
					setStyle={style}
				/>
				<span className='results-page__span'></span>
				<Microphone setTheme={theme} setStyle={style} />
				<Search
					className={`${style}-page__icon ${style}-page__search-icon`}
				/>
			</div>
		</form>
	) : (
		<form className='search-page__form' onSubmit={submitForm}>
			<div
				className={`search-page__form-group search-page__form-group--${theme}`}
			>
				<Search className={`${style}-page__icon`} />
				<input
					className={`search-page__input search-page__input--${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>
				<Clear
					clearInput={clearInput}
					setTheme={theme}
					setStyle={style}
				/>
				<span
					className={`search-page__span search-page__span--${theme}`}
				></span>
				<Microphone setTheme={theme} setStyle={style} />
			</div>

			<div className='search-form__buttons'>
				<button
					className={`search-form__button search-form__button--${theme}`}
					type='submit'
					onClick={submitForm}
				>
					Google Search
				</button>
				<button
					className={`search-form__button search-form__button--${theme}`}
					type='submit'
					onClick={submitForm}
				>
					I'm Feeling Lucky
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
