import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Results from '@pages/Results';
import Search from '@components/Home/Search';
import '@styles/App.css';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={[<Search />, <Results />]} />
			</Routes>
		</div>
	);
}

export default App;

