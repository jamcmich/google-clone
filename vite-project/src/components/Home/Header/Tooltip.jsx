import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { TbGridDots } from 'react-icons/tb';

import '@styles/Home/Header/Tooltip.css';

const Tooltip = ({ theme }) => {
	const [tooltip, showTooltip] = useState(true);

	return (
		<React.Fragment>
			<TbGridDots
				className={`home-header__icon home-header__icon--hover home-header__icon--theme-${theme}`}
				data-tip='Google apps'
				data-for='home-header__icon-grid'
				onMouseEnter={() => showTooltip(true)}
				onMouseLeave={() => {
					showTooltip(false);
					setTimeout(() => showTooltip(true), 50);
				}}
			/>
			{tooltip && (
				<ReactTooltip
					id='home-header__icon-grid'
					className='home-header__icon-tooltip'
					data-place='bottom'
					data-type='info'
					effect='solid'
				/>
			)}
		</React.Fragment>
	);
};

export default Tooltip;
