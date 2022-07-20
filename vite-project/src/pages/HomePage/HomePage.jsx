import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

import HomeHeader from './HomeHeader/HomeHeader';
import HomeBody from './HomeBody/HomeBody';
import HomeFooter from './HomeFooter/HomeFooter';
import './HomePage.css';

const HomePage = () => {
	const [{ theme }] = useStateValue();

	return (
		<div className={`home-page home-page--theme-${theme}`}>
			<HomeHeader />
			<HomeBody />
			<HomeFooter />
		</div>
	);
};

export default HomePage;
