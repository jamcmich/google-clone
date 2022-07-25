import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '@contexts/StateProvider';
import { actionTypes } from '@contexts/reducer';
import { Sun, Moon, Grid } from '@components/icons/Icons';
import Tooltip from '@components/tooltip/Tooltip';
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
						<Sun onClick={toggleTheme} />
					) : (
						<Moon onClick={toggleTheme} />
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

					<Tooltip content='Google Apps' direction='bottom'>
						<Grid style={'results'} />
					</Tooltip>

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
