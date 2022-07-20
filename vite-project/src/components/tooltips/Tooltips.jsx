import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdClear } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';

import './Tooltips.css';

const Clear = ({ clearInput }) => {
	return (
		<React.Fragment>
			<div className='home-form__icon-container home-form__icon--hidden'>
				<MdClear
					className='home-form__icon home-form__icon--size-xl  home-form__icon--color-stone home-form__icon--no-outline home-form__icon--pointer'
					data-tip='Clear'
					data-for='clear__tooltip'
					onClick={clearInput}
				/>
			</div>
			<ReactTooltip
				id='clear__tooltip'
				className='home-form__tooltip'
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
			<div className='home-form__icon-container home-form__icon-container--padding-x'>
				<FaMicrophone
					className={`home-form__icon home-form__icon--size-md home-form__icon--padding-x home-form__icon--pointer home-form__icon--theme-${theme}`}
					data-tip='Search by voice'
					data-for='mic__tooltip'
				/>
			</div>
			<ReactTooltip
				id='mic__tooltip'
				className='home-form__tooltip'
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
