const initialState = {
	input: null,
	theme: 'dark',
};

const actionTypes = {
	SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
	SET_APPLICATION_THEME: 'SET_APPLICATION_THEME',
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_INPUT:
			return {
				...state,
				input: action.input,
			};
		case actionTypes.SET_APPLICATION_THEME:
			return {
				...state,
				theme: action.theme,
			};
		default:
			return state;
	}
};

export { initialState, actionTypes, reducer };
