import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import { IoMdMic } from 'react-icons/io';
import { FaCog } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';

const Sun = () => {
	return (
		<div className='icon-container'>
			<BsSunFill className='icon-sun' />
		</div>
	);
};

const Moon = () => {
	return (
		<div className='icon-container'>
			<BsMoonFill className='icon-moon' />
		</div>
	);
};

const Clear = ({ clearInput }) => {
	return (
		<div className='icon-container'>
			<MdClear className='icon-clear' onClick={clearInput} />
		</div>
	);
};

const Mic = () => {
	return (
		<div className='icon-container'>
			<IoMdMic className='icon-mic' />
		</div>
	);
};

const Settings = () => {
	return (
		<div className='icon-container'>
			<FaCog className='icon-settings' />
		</div>
	);
};

const Grid = () => {
	return (
		<div className='icon-container'>
			<TbGridDots className='icon-grid' />
		</div>
	);
};

export default { Sun, Moon, Clear, Mic, Settings, Grid };
