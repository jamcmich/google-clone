import React from 'react';
import { Link } from 'react-router-dom';
import { BsSunFill as Sun, BsMoonStarsFill as Moon } from 'react-icons/bs';

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
			<div className='home-header__nav'>
				<nav className='home-header__nav-left'>
					<Link className='home-header__link' to='#about'>
						About
					</Link>
					<Link className='home-header__link' to='#store'>
						Store
					</Link>
					{theme === 'dark' ? (
						<Sun
							className='home-header__icon'
							onClick={toggleTheme}
						/>
					) : (
						<Moon
							className='home-header__icon'
							onClick={toggleTheme}
						/>
					)}
				</nav>

				<nav className='home-header__nav-right'>
					<Link
						className='home-header__link home-header__gmail-link'
						to='#gmail'
					>
						Gmail
					</Link>
					<Link className='home-header__link' to='#images'>
						Images
					</Link>

					<Grid setTheme={theme} />

					<div className='home-header__image-border'>
						<img
							className='home-header__image'
							src={user}
							alt='Jacob McMichael'
						/>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default HomeHeader;
