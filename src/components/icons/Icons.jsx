/* Utilities */
import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

/* Assets */
import { BsSunFill, BsMoonStarsFill, BsImage } from 'react-icons/bs';
import { BiSearch, BiNews, BiDotsVerticalRounded } from 'react-icons/bi';
import { MdClear, MdKeyboardArrowRight } from 'react-icons/md';
import {
	IoMdMic,
	IoMdSearch,
	IoMdSettings,
	IoMdMenu,
	IoMdNotificationsOutline,
} from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import { AiOutlineBook } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';

/* Styles */
import './Icons.css';

const small = 15;
const large = 21;

const Sun = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsSunFill
				className={`icon icon-sun ${props.style || ''} ${theme}`}
				size={large}
				onClick={props.callToggleTheme}
			/>
		</div>
	);
};

const Moon = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsMoonStarsFill
				className={`icon icon-moon ${props.style || ''} ${theme}`}
				size={large}
				onClick={props.callToggleTheme}
			/>
		</div>
	);
};

const Clear = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<MdClear
				className={`icon icon-clear ${props.style || ''} ${theme}`}
				onClick={props.callClearInput}
				size={props.size || large}
			/>
		</div>
	);
};

const Mic = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdMic
				className={`icon icon-mic ${props.style || ''} ${theme}`}
				size={props.size || large}
			/>
		</div>
	);
};

const Search = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdSearch
				className={`icon icon-search ${props.style || ''} ${theme}`}
				size={props.size || large}
			/>
		</div>
	);
};

const Settings = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdSettings
				className={`icon icon-settings ${props.style || ''} ${theme}`}
				size={large + 2}
			/>
		</div>
	);
};

const Grid = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<TbGridDots
				className={`icon icon-grid ${props.style || ''} ${theme}`}
				size={large}
			/>
		</div>
	);
};

const SearchSmall = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BiSearch
				className={`icon icon-search-sm ${props.style || ''} ${theme}`}
				size={small}
			/>
		</div>
	);
};

const News = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BiNews
				className={`icon icon-news ${props.style || ''} ${theme}`}
				size={small}
			/>
		</div>
	);
};

const Image = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsImage
				className={`icon icon-image ${props.style || ''} ${theme}`}
				size={small}
			/>
		</div>
	);
};

const Book = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<AiOutlineBook
				className={`icon icon-book ${props.style || ''} ${theme}`}
				size={small}
			/>
		</div>
	);
};

const Video = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<RiVideoLine
				className={`icon icon-video ${props.style || ''} ${theme}`}
				size={small}
			/>
		</div>
	);
};

const Dots = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BiDotsVerticalRounded
				className={`icon icon-dots ${props.style || ''} ${theme}`}
				size={small}
			/>
		</div>
	);
};

const ArrowRight = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<MdKeyboardArrowRight
				className={`icon icon-arrow-right ${
					props.style || ''
				} ${theme}`}
				size={large + 5}
			/>
		</div>
	);
};

const HamburgerMenu = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdMenu
				className={`icon icon-hamburger ${props.style || ''} ${theme}`}
				size={large + 5}
			/>
		</div>
	);
};

const Bell = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdNotificationsOutline
				className={`icon icon-bell ${props.style || ''} ${theme}`}
				size={large + 5}
			/>
		</div>
	);
};

export {
	Sun,
	Moon,
	Clear,
	Mic,
	Search,
	Settings,
	Grid,
	SearchSmall,
	News,
	Image,
	Book,
	Video,
	Dots,
	ArrowRight,
	HamburgerMenu,
	Bell,
};
