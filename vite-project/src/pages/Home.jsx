import React from 'react';
import { Link } from 'react-router-dom';
import { TbGridDots } from 'react-icons/tb';

import Search from '@components/Search';
import '@styles/Home.css';

const Home = () => {
	return (
		<div className='home-header'>
			<div className='home-header__wrapper'>
				<div className='home-header__wrapper-left'>
					<Link className='home-header__link' to='/about'>
						About
					</Link>
					<Link className='home-header__link' to='/store'>
						Store
					</Link>
				</div>

				<div className='home-header__wrapper-right'>
					<Link className='home-header__link' to='/gmail'>
						Gmail
					</Link>
					<Link className='home-header__link' to='/images'>
						Images
					</Link>

					<TbGridDots className='home-header__icon' />

					<div className='home-header__icon-wrapper'>
						<img
							className='home-header__icon home-header__icon-profile'
							src='https://lh3.googleusercontent.com/ogw/ADea4I4Na4Z7vyX-O7bThVKay2u0FeSIh0SVZW13w9M_gK8=s32-c-mo'
							alt='Jacob McMichael'
						></img>
					</div>
				</div>
			</div>

			<div className='home-body__wrapper'>
				<img
					className='home-body__image-logo'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
				<div className='home-body__search-wrapper'>
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Home;
