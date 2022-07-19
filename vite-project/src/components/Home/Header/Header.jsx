import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';

import Tooltip from '@components/Home/Header/Tooltip';
import userProfile from '@assets/user-profile.png';
import { HiSun } from 'react-icons/hi';
import { BsMoonStarsFill } from 'react-icons/bs';
import '@styles/Home/Header/Header.css';

const Header = () => {
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
					<HiSun
						className='home-header__icon home-header__icon--size-lg'
						onClick={toggleTheme}
					/>
				) : (
					<BsMoonStarsFill
						className={`home-header__icon home-header__icon--size-md home-header__icon--theme-${theme}`}
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

				<Tooltip theme={theme} />

				<div className='home-header__image'>
					<img
						className={`home-header__user-profile home-header__user-profile--theme-${theme}`}
						src={userProfile}
						alt='Jacob McMichael'
					></img>
				</div>
			</nav>
		</header>
	);
};

export default Header;
