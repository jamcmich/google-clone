import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';
import { Sun, Moon } from '@components/icons'
import { Grid } from '@components/tooltips/Tooltips';
import user from '@assets/user.png';

import './HomeHeader.css';

const HomeHeader = () => {
	const [{ theme, style }, dispatch] = useStateValue();

	const toggleTheme = () => {
		dispatch({
			type: actionTypes.SET_APPLICATION_THEME,
			theme: theme === 'dark' ? 'light' : 'dark',
		});
	};

	const toggleStyle = () => {
		dispatch({
			type: actionTypes.SET_APPLICATION_STYLE,
			style: location.pathname === '/' ? 'search' : 'results',
		});
	};

	useEffect(() => {
		toggleStyle();
	}, []);

	return (
		<header className='home-header'>
			<div className='home-header__nav'>
				<nav
					className={`home-header__nav-left home-header__nav-left--${theme}`}
				>
					<Link className='home-header__link' to='#about'>
						About
					</Link>
					<Link className='home-header__link' to='#store'>
						Store
					</Link>
					{theme === 'dark' ? (
						<Sun
							className={`home-header__icon home-header__icon--${theme}`}
							onClick={toggleTheme}
						/>
					) : (
						<Moon
							className={`home-header__icon home-header__icon--${theme} home-header__moon-icon--${theme}`}
							onClick={toggleTheme}
						/>
					)}
				</nav>

				<nav
					className={`home-header__nav-right home-header__nav-right--${theme}`}
				>
					<Link
						className='home-header__link home-header__gmail-link'
						to='#gmail'
					>
						Gmail
					</Link>
					<Link className='home-header__link' to='#images'>
						Images
					</Link>

					<Grid setTheme={theme} setStyle={style} />

					<div className='home-header__image-border'>
						<img
							className={`home-header__image home-header__image--${theme}`}
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
