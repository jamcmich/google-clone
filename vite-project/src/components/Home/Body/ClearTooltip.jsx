import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdClear } from 'react-icons/md';

import '@styles/Home/Body/Tooltip.css';

const ClearTooltip = () => {
	return (
		<React.Fragment>
			<div className='home-form__icon-container home-form__icon--hidden'>
				<MdClear
					className='home-form__icon home-form__icon--size-xl  home-form__icon--color-stone home-form__icon--no-outline home-form__icon--pointer'
					data-tip='Clear'
					data-for='clear__tooltip'
					onClick={() => setInput('')}
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

export default ClearTooltip;
