import React from 'react';

import Header from '@components/Home/Header/Header';
import Body from '@components/Home/Body/Body';
import Footer from '@components/Home/Footer/Footer';
import '@styles/Home/Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
