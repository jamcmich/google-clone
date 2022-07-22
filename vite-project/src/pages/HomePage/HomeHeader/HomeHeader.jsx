import React from 'react';
import { Link } from 'react-router-dom';
import { HiSun as Sun } from 'react-icons/hi';
import { BsMoonStarsFill as Moon } from 'react-icons/bs';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';
import { Grid } from '@components/tooltips/Tooltips';
import user from '@assets/user.png';

import './HomeHeader.css';

const HomeHeader = () => {
	const [{ theme }, dispatch] = useStateValue();

	const toggleTheme = () => {
		dispatch({
			type: actionTypes.SET_APPLICATION_THEME,
			theme: theme === 'dark' ? 'light' : 'dark',
		});
	};

	return (
		<header className='home-header'>
			<nav
				className={`home-header__nav home-header__nav--theme-${theme}`}
			>
				<Link className='home-header__link' to='#about'>
					About
				</Link>
				<Link className='home-header__link' to='#store'>
					Store
				</Link>
				{theme === 'dark' ? (
					<Sun
						className='home-header__icon home-header__icon--size-lg home-header__icon--theme-dark--hover'
						onClick={toggleTheme}
					/>
				) : (
					<Moon
						className={`home-header__icon home-header__icon--size-md home-header__icon--theme-light--hover`}
						onClick={toggleTheme}
					/>
				)}
			</nav>

			<nav
				className={`home-header__nav home-header__nav--text-white home-header__nav--theme-${theme}-text`}
			>
				<div className='home-header__link-group'>
					<Link
						className='home-header__link home-header__link--text-sm'
						to='#gmail'
					>
						Gmail
					</Link>
					<Link
						className='home-header__link home-header__link--margin-right home-header__link--text-sm'
						to='#images'
					>
						Images
					</Link>
				</div>

				<Grid setTheme={theme} />

				<div className='home-header__image'>
					<img
						className={`home-header__user-profile home-header__user-profile--theme-${theme}`}
						src={user}
						alt='Jacob McMichael'
					></img>
				</div>
			</nav>
		</header>
	);
};

export default HomeHeader;
