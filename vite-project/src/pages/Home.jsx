import React from 'react';
import { useStateValue } from '@contexts/StateProvider';

import Header from '@components/Home/Header/Header';
import Body from '@components/Home/Body/Body';
import Footer from '@components/Home/Footer/Footer';
import '@styles/Home/Home.css';

const Home = () => {
	const [{ theme }, dispatch] = useStateValue();

	return (
		<div className={`home home--theme-${theme}`}>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
