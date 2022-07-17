import React from 'react';

import Header from '@components/Home/Header/Header';
import Search from '@components/Home/Search';
import Footer from '@components/Home/Footer';
import '@styles/Home/Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Header />
			<Search />
			<Footer />
		</div>
	);
};

export default Home;
