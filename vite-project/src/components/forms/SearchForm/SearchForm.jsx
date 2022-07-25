/* Utilities */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';
import Tooltip from '@components/tooltip/Tooltip';

/* Icons */
import { Clear, Mic, Search } from '@components/icons/Icons';

/* Styles */
import './SearchForm.css';

const SearchForm = () => {
	const navigate = useNavigate();
	const [{ input, theme }, dispatch] = useStateValue();
	const [searchInput, setSearchInput] = useState('');

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

	useEffect(() => {
		prependSearchInput();
	}, [input]);

	return location.pathname === '/results' ? (
		<form className='results-page__form' onSubmit={submitForm}>
			<div
				className={`results-page__form-group results-page__form-group--${theme}`}
			>
				<input
					className={`results-page__input results-page__input--${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>

				<Tooltip content='Clear' direction='bottom'>
					<Clear clearInput={clearInput} style='results' />
				</Tooltip>

				<span
					className={`results-page__span results-page__span--${theme}`}
				></span>

				<Tooltip content='Search by Voice' direction='bottom'>
					<Mic clearInput={clearInput} style='results' />
				</Tooltip>

				<Search style='results' />
			</div>
		</form>
	) : (
		<form className='search-page__form' onSubmit={submitForm}>
			<div
				className={`search-page__form-group search-page__form-group--${theme}`}
			>
				<Search style='search' />
				<input
					className={`search-page__input search-page__input--${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>

				<Tooltip content='Clear' direction='bottom'>
					<Clear clearInput={clearInput} style='search' />
				</Tooltip>

				<span
					className={`search-page__span search-page__span--${theme}`}
				></span>

				<Tooltip content='Search by Voice' direction='bottom'>
					<Mic clearInput={clearInput} style='search' />
				</Tooltip>
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
