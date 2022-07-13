import React from 'react';
import { Link } from 'react-router-dom';
import { TbGridDots } from 'react-icons/tb';

import Search from '@components/Search';
import '@styles/Home.css';

const Home = () => {
	return (
		<div className='home__wrapper'>
			<div className='home__header'>
				<div className='header--left'>
					<Link className='link' to='/about'>
						About
					</Link>
					<Link className='link' to='/store'>
						Store
					</Link>
				</div>

				<div className='header--right'>
					<Link className='link' to='/gmail'>
						Gmail
					</Link>
					<Link className='link' to='/images'>
						Images
					</Link>

					<TbGridDots className='icon icon--grid' />

					<div className='icon--user__wrapper'>
						<img
							className='icon icon--user'
							src='https://lh3.googleusercontent.com/ogw/ADea4I4Na4Z7vyX-O7bThVKay2u0FeSIh0SVZW13w9M_gK8=s32-c-mo'
							alt='Jacob McMichael'
						></img>
					</div>
				</div>
			</div>

			<div className='home__body'>
				<img
					className='logo--google'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
				<div className='home__inputContainer'>
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Home;
