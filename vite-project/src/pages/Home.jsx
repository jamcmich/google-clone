import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home__wrapper'>
			<div className='home__header'>
				<div className='home__header_left'>
					<Link to='/about'>About</Link>
					<Link to='/store'>Store</Link>
				</div>

				<div className='home__header_right'>
					<Link to='/gmail'>Gmail</Link>
					<Link to='/images'>Images</Link>
				</div>
			</div>
			<div className='home__body'></div>
		</div>
	);
};

export default Home;
