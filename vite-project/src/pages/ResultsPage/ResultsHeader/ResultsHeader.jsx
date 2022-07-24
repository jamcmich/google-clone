import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	BiSearch as Search,
	BiDotsVerticalRounded as Dots,
	BiNews as News,
} from 'react-icons/bi';
import { RiVideoLine as Video } from 'react-icons/ri';
import { BsImage as Image } from 'react-icons/bs';
import { AiOutlineBook as Book } from 'react-icons/ai';
import { BsSunFill as Sun, BsMoonStarsFill as Moon } from 'react-icons/bs';

import { Settings, Grid } from '@components/tooltips/Tooltips';
import user from '@assets/user.png';
import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/Reducer';
import SearchForm from '@components/forms/SearchForm/SearchForm';

import './ResultsHeader.css';

const ResultsHeader = () => {
	const [{ theme }, dispatch] = useStateValue();

	const toggleTheme = () => {
		dispatch({
			type: actionTypes.SET_APPLICATION_THEME,
			theme: theme === 'dark' ? 'light' : 'dark',
		});
	};

	const handleStyles = () => {
		switch (location.pathname) {
			case '/':
				setStyle('search');
				break;
			case '/results':
				setStyle('results');
				break;
			default:
				console.log('no styles could be applied');
				break;
		}
	};

	useEffect(() => {
		handleStyles();
	}, []);

	return (
		<header className='results-header'>
			<div className='results-header__form-group'>
				<Link to='/'>
					<img
						className='results-header__image'
						src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
						alt='logo'
					/>
				</Link>

				<SearchForm />

				<nav className='results-header__nav-right'>
					{theme === 'dark' ? (
						<Sun
							className={`home-header__icon home-header__icon--${theme} results-header__sun-icon`}
							onClick={toggleTheme}
						/>
					) : (
						<Moon
							className={`home-header__icon home-header__icon--${theme} home-header__moon-icon--${theme} results-header__moon-icon`}
							onClick={toggleTheme}
						/>
					)}

					<Settings className='results-header__icon results-header__settings-icon' />

					<Grid setTheme={theme} />

					<div className='home-header__image-border'>
						<img
							className={`home-header__image home-header__image--${theme}`}
							src={user}
							alt='Jacob McMichael'
						/>
					</div>
				</nav>
			</div>

			<nav className='results-header__links'>
				<div className='results-header__link-container'>
					<div className='results-header__link-item results-header__link-item--active'>
						<Search className='results-header__link-icon' />
						<Link to='#all'>All</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Image className='results-header__link-icon text-0.9rem mr-0.1rem' />
						<Link to='#images'>Images</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Video className='results-header__link-icon' />
						<Link to='#videos'>Videos</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Book className='results-header__link-icon text-0.9rem' />
						<Link to='#books'>Books</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<News className='results-header__link-icon mr-0.1rem' />
						<Link to='#news'>News</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item'>
						<Dots className='results-header__link-icon' />
						<Link to='#more'>More</Link>
					</div>
				</div>

				<div className='results-header__link-container'>
					<div className='results-header__link-item results-header__link-tools'>
						<Link to='#tools'>Tools</Link>
					</div>
				</div>
			</nav>
			<span className='results-header__span'></span>
		</header>
	);
};

export default ResultsHeader;
