import Home from '@pages/Home';
import { Routes, Route } from 'react-router-dom';

import Search from '@components/Search';
import SearchPage from '@pages/SearchPage';
import '@styles/App.css';

function App() {
	return (
		<div className='app__wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={[<Search />, <SearchPage />]} />
			</Routes>
		</div>
	);
}

export default App;

