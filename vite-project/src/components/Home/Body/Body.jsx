import React from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/Home/Body/Form';
import '@styles/Home/Body/Body.css';

const Body = () => {
	return (
		<section className='home-body'>
			<Link to='/'>
				<img
					className='home-body__image'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
			</Link>

			<Form />
		</section>
	);
};

export default Body;
