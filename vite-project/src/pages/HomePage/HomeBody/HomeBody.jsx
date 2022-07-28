import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '@components/forms/SearchForm/SearchForm';

import './HomeBody.css';

const HomeBody = () => {
	return (
		<section className='home-body'>
			<Link to='/google-search-clone'>
				<img
					className='home-body__image'
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					alt='logo'
				/>
			</Link>

			<SearchForm />
		</section>
	);
};

export default HomeBody;
