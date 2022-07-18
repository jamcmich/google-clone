import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaMicrophone } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';
import '@styles/Home/Body/Form.css';

const Form = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState('');
	const [clearTooltip, showClearTooltip] = useState(true);
	const [micTooltip, showMicTooltip] = useState(true);

	const getSearchResults = (event) => {
		event.preventDefault();
		navigate('/search');

		// switch (location.pathname) {
		// 	case '/':
		// 		navigate('/search');
		// 	case '/search':
		// 		dispatch({
		// 			type: actionTypes.SET_SEARCH_INPUT,
		// 			input: input,
		// 		});
		// }
	};

	return (
		<form className='home-form' onSubmit={getSearchResults}>
			<div className='home-form__group'>
				<HiOutlineSearch className='home-form__icon home-form__icon--color-gray' />

				<input
					className='home-form__input'
					value={input}
					type='text'
					onChange={(event) => setInput(event.target.value)}
				/>
				
				<MdClear
					className='home-form__icon home-form__icon--color-stone home-form__icon--no-outline home-form__icon--hidden'
					data-tip='Clear'
					data-for='home-form__icon'
					onMouseEnter={() => showClearTooltip(true)}
					onMouseLeave={() => {
						showClearTooltip(false);
						setTimeout(() => showClearTooltip(true), 50);
					}}
					onClick={() => setInput('')}
				/>
				{clearTooltip && (
					<ReactTooltip
						id='home-form__icon'
						className='home-form__tooltip'
						textColor='#BDC1C6'
						border
						borderColor='#3C4043'
						backgroundColor='#202124'
						place='bottom'
						type='info'
						effect='solid'
					/>
				)}
				<span className='home-form__span'></span>

				<FaMicrophone
					className='home-form__icon home-form__icon--size-md home-form__icon--pointer'
					data-tip='Search by voice'
					data-for='mic-icon'
					onMouseEnter={() => showMicTooltip(true)}
					onMouseLeave={() => {
						showMicTooltip(false);
						setTimeout(() => showMicTooltip(true), 50);
					}}
				/>
				{micTooltip && (
					<ReactTooltip
						id='mic-icon'
						className='search-form__tooltip'
						textColor='#BDC1C6'
						border
						borderColor='#3C4043'
						backgroundColor='#202124'
						place='bottom'
						type='info'
						effect='solid'
					/>
				)}
			</div>

			<div className='search__buttons'>
				<button
					className='search__button'
					type='submit'
					onClick={getSearchResults}
				>
					Google Search
				</button>
				<button className='search__button'>I'm Feeling Lucky</button>
			</div>
		</form>
	);
};

export default Form;
