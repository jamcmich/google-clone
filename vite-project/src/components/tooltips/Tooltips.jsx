import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdClear } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';

import './Tooltips.css';

const Clear = ({ clearInput, setTheme: theme }) => {
	return (
		<React.Fragment>
			<div className='search-form__icon-container search-form__icon-container--size-lg search-form__icon-container--hidden'>
				<MdClear
					className='search-form__icon  search-form__icon--color-stone search-form__icon--no-outline search-form__icon--pointer'
					data-tip='Clear'
					data-for='clear__tooltip'
					onClick={clearInput}
				/>
			</div>
			<ReactTooltip
				id='clear__tooltip'
				className={`search-form__tooltip search-form__tooltip--theme-${theme}`}
				border
				borderColor='#3C4043'
				backgroundColor='#202124'
				place='bottom'
				type='info'
				effect='solid'
			/>
		</React.Fragment>
	);
};

const Microphone = ({ setTheme: theme }) => {
	return (
		<React.Fragment>
			<div className='search-form__icon-container search-form__icon-container--size-md'>
				<FaMicrophone
					className={`search-form__icon search-form__icon--padding-x search-form__icon--pointer search-form__icon--theme-${theme}`}
					data-tip='Search by voice'
					data-for='mic__tooltip'
				/>
			</div>
			<ReactTooltip
				id='mic__tooltip'
				className={`search-form__tooltip search-form__tooltip--theme-${theme}`}
				border
				borderColor='#3C4043'
				backgroundColor='#202124'
				place='bottom'
				type='info'
				effect='solid'
			/>
		</React.Fragment>
	);
};

const Grid = ({ setTheme: theme }) => {
	return (
		<React.Fragment>
			<TbGridDots
				className={`home-header__icon home-header__icon--hover home-header__icon--theme-${theme}`}
				data-tip='Google apps'
				data-for='home-header__icon-grid'
			/>

			<ReactTooltip
				id='home-header__icon-grid'
				className='home-header__icon-tooltip'
				data-place='bottom'
				data-type='info'
				effect='solid'
			/>
		</React.Fragment>
	);
};

export { Clear, Microphone, Grid };
