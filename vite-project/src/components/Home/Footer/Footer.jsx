import React from 'react';
import { Link } from 'react-router-dom';

import leaf from '@assets/leaf.png';
import '@styles/Home/Footer/Footer.css';

const Footer = () => {
	return (
		<footer className='home-footer'>
			<nav className='home-footer__nav home-footer__nav--content-start'>
				<Link className='home-footer__link' to='/about'>
					Advertising
				</Link>
				<Link className='home-footer__link' to='/store'>
					Business
				</Link>
				<Link className='home-footer__link' to='/store'>
					How Search Works
				</Link>
			</nav>

			<nav className='home-footer__nav home-footer__nav--content-center'>
				<Link
					className='home-footer__link home-footer__link--flex-row'
					to='https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=#home'
				>
					<img
						className='home-footer__image'
						src={leaf}
						alt='carbon neutral'
					/>
					Carbon neutral since 2007
				</Link>
			</nav>

			<nav className='home-footer__nav home-footer__nav--content-end'>
				<Link className='home-footer__link' to='/gmail'>
					Privacy
				</Link>
				<Link className='home-footer__link' to='/images'>
					Terms
				</Link>
				<Link className='home-footer__link' to='/images'>
					Settings
				</Link>
			</nav>
		</footer>
	);
};

export default Footer;
