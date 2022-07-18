import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FaMicrophone } from 'react-icons/fa';

import '@styles/Home/Body/Tooltip.css';

const MicTooltip = () => {
	return (
		<React.Fragment>
			<div className='home-form__icon-container home-form__icon-container--padding-x'>
				<FaMicrophone
					className='home-form__icon home-form__icon--size-md home-form__icon--padding-x home-form__icon--pointer'
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

export default MicTooltip;
