import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Results from '@pages/Results';
import '@styles/App.css';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search' element={<Results />} />
			</Routes>
		</div>
	);
}

export default App;

