import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initialState, reducer } from '@contexts/reducer';
import { StateProvider } from '@contexts/StateProvider';

import 'virtual:windi.css';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</BrowserRouter>
	</React.StrictMode>
);

