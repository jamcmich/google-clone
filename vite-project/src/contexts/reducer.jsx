const initialState = {
	input: null,
	theme: 'dark',
};

const actionTypes = {
	SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
	SET_APPLICATION_THEME: 'SET_APPLICATION_THEME',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_SEARCH_INPUT:
			console.log(action.input);
			return {
				...state,
				input: action.input,
			};
		case actionTypes.SET_APPLICATION_THEME:
			console.log(action.theme);
			return {
				...state,
				theme: action.theme,
			};

		default:
			return state;
	}
};

export { initialState, actionTypes, reducer };
