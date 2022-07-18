import React from 'react';
import { Link } from 'react-router-dom';

import Tooltip from '@components/Home/Header/Tooltip';
import userProfile from '@assets/user-profile.png';
import '@styles/Home/Header/Header.css';

const Header = () => {
	return (
		<header className='home-header'>
			<nav className='home-header__nav'>
				<Link className='home-header__link' to='/about'>
					About
				</Link>
				<Link className='home-header__link' to='/store'>
					Store
				</Link>
			</nav>

			<nav className='home-header__nav home-header__nav--text-white'>
				<Link className='home-header__link' to='/gmail'>
					Gmail
				</Link>
				<Link className='home-header__link' to='/images'>
					Images
				</Link>

				<Tooltip />

				<div className='home-header__image'>
					<img
						className='home-header__user-profile'
						src={userProfile}
						alt='Jacob McMichael'
					></img>
				</div>
			</nav>
		</header>
	);
};

export default Header;
