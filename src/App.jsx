import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage/HomePage';
import ResultsPage from '@pages/ResultsPage/ResultsPage';

import { useStateValue } from '@contexts/StateProvider';
import './App.css';

function App() {
	const [{ theme }] = useStateValue();

	return (
		<div className={`app ${theme}`}>
			<Routes>
				<Route path='/google-search-clone' element={<HomePage />} />
				<Route path='/google-search-clone/results' element={<ResultsPage />} />
			</Routes>
		</div>
	);
}

export default App;

