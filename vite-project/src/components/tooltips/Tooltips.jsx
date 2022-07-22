import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdClear } from 'react-icons/md';
import { IoMdMic } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

import './Tooltips.css';

const Clear = ({ clearInput, setTheme: theme, setStyle: style }) => {
	return (
		<React.Fragment>
			<MdClear
				className={`${style}-page__icon ${style}-page__clear-icon`}
				data-tip='Clear'
				data-for='clear__tooltip'
				onClick={clearInput}
			/>
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

const Microphone = ({ setTheme: theme, setStyle: style }) => {
	return (
		<React.Fragment>
			<IoMdMic
				className={`${style}-page__icon ${style}-page__mic-icon`}
				data-tip='Search by voice'
				data-for='mic__tooltip'
			/>
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
				className='search-page__icon results-page__icon'
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
