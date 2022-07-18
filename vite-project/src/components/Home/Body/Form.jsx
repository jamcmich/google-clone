import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';

import { useStateValue } from '@contexts/StateProvider';
// import { actionTypes } from '@contexts/reducer';
import MicTooltip from '@components/Home/Body/MicTooltip';
import ClearTooltip from '@components/Home/Body/ClearTooltip';
import '@styles/Home/Body/Form.css';

const Form = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState('');

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
				<div className='home-form__icon-container'>
					<HiOutlineSearch className='home-form__icon home-form__icon--size-lg home-form__icon--color-gray' />
				</div>

				<input
					className='home-form__input'
					value={input}
					type='text'
					onChange={(event) => setInput(event.target.value)}
				/>

				<ClearTooltip />
				<span className='home-form__span home-form__span--hidden'></span>
				<MicTooltip />
			</div>

			<div className='home-form__buttons'>
				<button
					className='home-form__button'
					type='submit'
					onClick={getSearchResults}
				>
					Google Search
				</button>
				<button className='home-form__button'>I'm Feeling Lucky</button>
			</div>
		</form>
	);
};

export default Form;
