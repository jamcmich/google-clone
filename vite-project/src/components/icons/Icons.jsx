/* Utilities */
import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

/* Assets */
import { BsSunFill, BsMoonStarsFill, BsImage } from 'react-icons/bs';
import { BiSearch, BiNews, BiDotsVerticalRounded } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { IoMdMic, IoMdSearch, IoMdSettings } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import { AiOutlineBook } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';

/* Styles */
import './Icons.css';

const svgSize = 21;

const Sun = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsSunFill
				className={`icon icon-sun ${props.style}-page__icon-sun icon-sun--${theme}`}
				size={svgSize}
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
				className={`icon icon-moon ${props.style}-page__icon-moon icon-moon--${theme}`}
				size={svgSize}
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
				className={`icon icon-clear ${props.style}-page__icon-clear icon-clear--${theme}`}
				onClick={props.callClearInput}
				size={svgSize + 1}
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
				size={svgSize + 1}
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
				size={svgSize}
			/>
		</div>
	);
};

const Settings = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<IoMdSettings
				className={`icon icon-settings ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
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
				size={svgSize}
			/>
		</div>
	);
};

const SearchSmall = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BiSearch
				className={`icon icon-search-sm ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
			/>
		</div>
	);
};

const News = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BiNews
				className={`icon icon-news ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
			/>
		</div>
	);
};

const Image = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BsImage
				className={`icon icon-image ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
			/>
		</div>
	);
};

const Book = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<AiOutlineBook
				className={`icon icon-book ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
			/>
		</div>
	);
};

const Video = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<RiVideoLine
				className={`icon icon-video ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
			/>
		</div>
	);
};

const Dots = (props) => {
	const [{ theme }] = useStateValue();

	return (
		<div className='icon-container'>
			<BiDotsVerticalRounded
				className={`icon icon-dots ${props.style}-page__icon-grid icon-grid--${theme}`}
				size={svgSize}
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
};
