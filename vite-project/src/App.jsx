import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage/HomePage';
import ResultsPage from '@pages/ResultsPage/ResultsPage';

import './App.css';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/results' element={<ResultsPage />} />
			</Routes>
		</div>
	);
}

export default App;

