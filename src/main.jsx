import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { initialState, reducer } from '@contexts/reducer';
import { StateProvider } from '@contexts/StateProvider';

import App from './App';
import 'virtual:windi.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</BrowserRouter>
);

