import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineSearch as Search } from 'react-icons/hi';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/Reducer';
import { Microphone, Clear } from '@components/tooltips/Tooltips';

import './SearchForm.css';

const SearchForm = () => {
	const navigate = useNavigate();
	const [{ theme }, dispatch] = useStateValue();
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

	useEffect(() => {
		console.log(searchInput);
	}, [searchInput]);

	return location.pathname === '/search' ? (
		<form className='results-form' onSubmit={submitForm}>
			<div
				className={`home-form__group home-form__group--theme-${theme}`}
			>
				<div className='home-form__icon-container'>
					<Search className='home-form__icon home-form__icon--size-lg home-form__icon--color-gray' />
				</div>

				<input
					className={`home-form__input home-form__input--theme-${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>

				<Clear clearInput={clearInput} />
				<span
					className={`home-form__span home-form__span--theme-${theme} home-form__span--hidden`}
				></span>
				<Microphone setTheme={theme} />
			</div>

			<div className='home-form__buttons'>
				<button
					className={`home-form__button home-form__button--color-gray home-form__button--theme-${theme}`}
					type='submit'
					onClick={submitForm}
				>
					Google Search
				</button>
				<button
					className={`home-form__button home-form__button--color-gray home-form__button--theme-${theme}`}
				>
					I'm Feeling Lucky
				</button>
			</div>
		</form>
	) : (
		<form className='home-form' onSubmit={submitForm}>
			<div
				className={`home-form__group home-form__group--theme-${theme}`}
			>
				<div className='home-form__icon-container'>
					<Search className='home-form__icon home-form__icon--size-lg home-form__icon--color-gray' />
				</div>
				<input
					className={`home-form__input home-form__input--theme-${theme}`}
					type='text'
					value={searchInput}
					onChange={handleChange}
				/>
				<Clear clearInput={clearInput} />
				<span
					className={`home-form__span home-form__span--theme-${theme} home-form__span--hidden`}
				></span>
				<Microphone setTheme={theme} />
			</div>

			<div className='home-form__buttons'>
				<button
					className={`home-form__button home-form__button--color-gray home-form__button--theme-${theme}`}
					type='submit'
					onClick={submitForm}
				>
					Google Search
				</button>
				<button
					className={`home-form__button home-form__button--color-gray home-form__button--theme-${theme}`}
				>
					I'm Feeling Lucky
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
