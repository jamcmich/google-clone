import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbGridDots } from 'react-icons/tb';
import ReactTooltip from 'react-tooltip';

import Search from '@components/Search';
import '@styles/Home.css';

const Home = () => {
	const [tooltip, showTooltip] = useState(true);

	return (
		<div className='home'>
			<div className='home-header'>
				<div className='home-header__left'>
					<Link className='home-header__link' to='/about'>
						About
					</Link>
					<Link className='home-header__link' to='/store'>
						Store
					</Link>
				</div>

				<div className='home-header__right'>
					<Link className='home-header__link' to='/gmail'>
						Gmail
					</Link>
					<Link className='home-header__link' to='/images'>
						Images
					</Link>

					<TbGridDots
						className='home-header__icon home-header__icon-grid'
						data-tip='Google apps'
						data-for='grid-icon'
						onMouseEnter={() => showTooltip(true)}
						onMouseLeave={() => {
							showTooltip(false);
							setTimeout(() => showTooltip(true), 50);
						}}
					/>
					{tooltip && (
						<ReactTooltip
							id='grid-icon'
							className='home-header__tooltip'
							data-text-color='#BDC1C6'
							data-border
							data-border-color='#3C4043'
							data-background-color='#202124'
							data-place='bottom'
							data-type='info'
							effect='solid'
						/>
					)}

					<div className='home-header__image'>
						<img
							className='home-header__image-profile'
							src='https://lh3.googleusercontent.com/ogw/ADea4I4Na4Z7vyX-O7bThVKay2u0FeSIh0SVZW13w9M_gK8=s32-c-mo'
							alt='Jacob McMichael'
						></img>
					</div>
				</div>
			</div>

			<div className='home-body'>
				<Search />
			</div>
		</div>
	);
};

export default Home;
