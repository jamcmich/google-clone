import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiOutlineSearch as Search } from 'react-icons/hi';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/Reducer';
import { Microphone, Clear } from '@components/tooltips/Tooltips';

import './SearchForm.css';

const SearchForm = () => {
	const navigate = useNavigate();
	const [{ input, theme }, dispatch] = useStateValue();
	const [searchInput, setSearchInput] = useState('');

	const submitForm = (event) => {
		event.preventDefault();

		console.log('submitForm()');

		if (searchInput) {
			dispatch({
				type: actionTypes.SET_SEARCH_INPUT,
				input: searchInput,
			});

			navigate('/search');
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
		if (input) document.querySelector('.search-form__input').value = input;
	};

	useEffect(() => {
		prependSearchInput();
	}, []);

	return location.pathname === '/search' ? (
		<form
			className='search-form search-form--flex-row'
			onSubmit={submitForm}
		>
			<div
				className={`search-form__group search-form__group--bg-fill search-form__group--wide search-form__group--shadow-lg search-form__group--theme-${theme}`}
			>
				<input
					className={`search-form__input search-form__input--padding search-form__input--theme-${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>

				<Clear clearInput={clearInput} setTheme={theme} />
				<span
					className={`search-form__span search-form__span--theme-${theme} search-form__span--hidden`}
				></span>
				<Microphone setTheme={theme} />
				<div className='search-form__icon-container search-form__icon-container--width-sm'>
					<Search className='search-form__icon search-form__icon--size-lg-2 search-form__icon--color-gray search-form__icon--margin' />
				</div>
			</div>

			<div className='search-form__buttons search-form_buttons--hidden'>
				<button
					className={`search-form__button search-form__button--color-gray search-form__button--theme-${theme}`}
					type='submit'
					onClick={submitForm}
				>
					Google Search
				</button>
				<button
					className={`search-form__button search-form__button--color-gray search-form__button--theme-${theme}`}
				>
					I'm Feeling Lucky
				</button>
			</div>
		</form>
	) : (
		<form className='search-form' onSubmit={submitForm}>
			<div
				className={`search-form__group search-form__group--theme-${theme}`}
			>
				<div className='search-form__icon-container'>
					<Search className='search-form__icon search-form__icon--size-lg search-form__icon--color-gray' />
				</div>
				<input
					className={`search-form__input search-form__input--theme-${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>
				<Clear clearInput={clearInput} setTheme={theme} />
				<span
					className={`search-form__span search-form__span--theme-${theme} search-form__span--hidden`}
				></span>
				<Microphone setTheme={theme} />
			</div>

			<div className='search-form__buttons'>
				<button
					className={`search-form__button search-form__button--color-gray search-form__button--theme-${theme}`}
					type='submit'
					onClick={submitForm}
				>
					Google Search
				</button>
				<button
					className={`search-form__button search-form__button--color-gray search-form__button--theme-${theme}`}
				>
					I'm Feeling Lucky
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
