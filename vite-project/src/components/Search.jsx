import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaMicrophone } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

import '@styles/Search.css';

const Search = () => {
	const [tooltip, showTooltip] = useState(true);

	return (
		<React.Fragment>
			<img
				className='search__image-logo'
				src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
				alt='logo'
			/>

			<form className='search-form'>
				<div className='search-form__input'>
					<HiOutlineSearch className='search-form__icon' />
					<input className='search-form__input-elem' />

					<FaMicrophone
						className='search-form__icon search-form__icon-mic'
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
				<button className='search__button'>Google Search</button>
				<button className='search__button'>I'm Feeling Lucky</button>
			</div>
		</React.Fragment>
	);
};

export default Search;
