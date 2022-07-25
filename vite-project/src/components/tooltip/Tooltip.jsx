import React, { useState } from 'react';

import './Tooltip.css';

const Tooltip = (props) => {
	let timeout;
	const [active, setActive] = useState(false);

	const showTooltip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 300);
	};

	const hideTooltip = () => {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<div
			className={`tooltip-container ${props.name || ''}`}
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
		>
			{props.children}
			{active && (
				<div
					className={`tooltip-tip ${props.direction || 'top'} ${props.type}`}
				>
					{props.content}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
