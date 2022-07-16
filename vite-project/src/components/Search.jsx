import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaMicrophone } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

import '@styles/Search.css';

const Search = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState('');
	const [clearTooltip, showClearTooltip] = useState(true);
	const [micTooltip, showMicTooltip] = useState(true);

	const getSearchResults = (event) => {
		event.preventDefault();

		switch (location.pathname) {
			case '/':
				navigate('/search');
			case '/search':
				// search for results
				dispatch({
					type: actionTypes.SET_SEARCH_INPUT,
					input: input,
				});
		}
	};

	return location.pathname === '/' ? (
		<React.Fragment>
			<a href='./'>
				<img
					className='search__image-logo'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
			</a>

			<form className='search-form' onSubmit={getSearchResults}>
				<div className='search-form__input'>
					<HiOutlineSearch className='search-form__icon search-form__search-icon--gray' />
					<input
						className='search-form__input-elem'
						value={input}
						type='text'
						onChange={(event) => setInput(event.target.value)}
					/>
					<MdClear
						className='search-form__icon search-form__cancel-icon'
						data-tip='Clear'
						data-for='clear-icon'
						onMouseEnter={() => showClearTooltip(true)}
						onMouseLeave={() => {
							showClearTooltip(false);
							setTimeout(() => showClearTooltip(true), 50);
						}}
						onClick={() => setInput('')}
					/>
					{clearTooltip && (
						<ReactTooltip
							id='clear-icon'
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
					<span className='search-form__span--border'></span>

					<FaMicrophone
						className='search-form__icon search-form__mic-icon'
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
			</form>

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
		</React.Fragment>
	) : location.pathname === '/search' ? (
		<div className='search search--styled'>
			<a href='./'>
				<img
					className='search__image-logo search__image-logo--small'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
			</a>

			<form className='search-form' onSubmit={getSearchResults}>
				<div className='search-form__input search-form__input--styled'>
					<input
						className='search-form__input-elem search-form__input-elem--styled'
						value={input}
						type='text'
						onChange={(event) => setInput(event.target.value)}
					/>
					<MdClear
						className='search-form__icon search-form__cancel-icon'
						data-tip='Clear'
						data-for='clear-icon'
						onMouseEnter={() => showClearTooltip(true)}
						onMouseLeave={() => {
							showClearTooltip(false);
							setTimeout(() => showClearTooltip(true), 50);
						}}
						onClick={() => setInput('')}
					/>
					{clearTooltip && (
						<ReactTooltip
							id='clear-icon'
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
					<span className='search-form__span search-form__span--border search-form__span--padding'></span>

					<div className='search-form__icons--spacing'>
						<FaMicrophone
							className='search-form__icon search-form__mic-icon'
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
						<HiOutlineSearch className='search-form__icon search-form__search-icon--blue' />
					</div>
				</div>
			</form>

			<div className='search__buttons search__buttons--hidden'>
				<button
					className='search__button'
					type='submit'
					onClick={getSearchResults}
				>
					Google Search
				</button>
				<button className='search__button'>I'm Feeling Lucky</button>
			</div>
		</div>
	) : null;
};

export default Search;
