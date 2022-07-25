/* Utilities */
import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

/* Icons */
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import { IoMdMic, IoMdSearch } from 'react-icons/io';
import { FaCog } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';

/* Styles */
import './Icons.css';

const Sun = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsSunFill
				className={`icon icon-sun ${props.style}-page__icon-sun icon-sun--${theme}`}
			/>
		</div>
	);
};

const Moon = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsMoonFill
				className={`icon icon-moon ${props.style}-page__icon-moon icon-moon--${theme}`}
			/>
		</div>
	);
};

const Clear = (props, { clearInput }) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<MdClear
				className={`icon icon-clear ${props.style}-page__icon-clear icon-clear--${theme}`}
				onClick={clearInput}
			/>
		</div>
	);
};

const Mic = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdMic
				className={`icon icon-mic ${props.style}-page__icon-mic icon-mic--${theme}`}
			/>
		</div>
	);
};

const Search = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdSearch
				className={`icon icon-search ${props.style}-page__icon-search icon-search--${theme}`}
			/>
		</div>
	);
};

const Settings = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<FaCog
				className={`icon icon-settings ${props.style}-page__icon-settings icon-settings--${theme}`}
			/>
		</div>
	);
};

const Grid = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<TbGridDots
				className={`icon icon-grid ${props.style}-page__icon-grid icon-grid--${theme}`}
			/>
		</div>
	);
};

export { Sun, Moon, Clear, Mic, Search, Settings, Grid };
