import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaMicrophone } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

import '@styles/Search.css';

const Search = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [input, setInput] = useState('');
	const [tooltip, showTooltip] = useState(true);

	const getSearchResults = (event) => {
		event.preventDefault();

		navigate('/search');
	};

	return location.pathname === '/' ? (
		<React.Fragment>
			<img
				className='search__image-logo'
				src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
				alt='logo'
			/>

			<form className='search-form' onSubmit={getSearchResults}>
				<div className='search-form__input'>
					<HiOutlineSearch className='search-form__icon search-form__search-icon--gray' />
					<input
						className='search-form__input-elem'
						value={input}
						type='text'
						onChange={(event) => setInput(event.target.value)}
					/>
					<MdClear className='search-form__icon search-form__cancel-icon' />
					<span className='search-form__input--border'></span>

					<FaMicrophone
						className='search-form__icon search-form__mic-icon'
						data-tip='Search by voice'
						data-for='mic-icon'
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 50);
						}}
					/>
					{tooltip && (
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
		<div className='search'>
			<img
				className='search__image-logo search__image-logo--small'
				src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
				alt='logo'
			/>

			<form className='search-form' onSubmit={getSearchResults}>
				<div className='search-form__input search-form__input--styled'>
					<input
						className='search-form__input-elem search-form__input-elem--styled'
						type='text'
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<div className='search-form__icon-container'>
						<FaMicrophone
							className='search-form__icon search-form__mic-icon search-form__icon--resize'
							data-tip='Search by voice'
							data-for='mic-icon'
							onMouseEnter={() => showTooltip(true)}
							onMouseLeave={() => {
								showTooltip(false);
								setTimeout(() => showTooltip(true), 50);
							}}
						/>
						{tooltip && (
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
						<HiOutlineSearch className='search-form__icon search-form__search-icon search-form__search-icon--blue search-form__icon--resize' />
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
