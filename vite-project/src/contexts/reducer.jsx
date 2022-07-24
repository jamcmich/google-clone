const initialState = {
	input: null,
	theme: 'dark',
	style: null,
};

const actionTypes = {
	SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
	SET_APPLICATION_THEME: 'SET_APPLICATION_THEME',
	SET_APPLICATION_STYLE: 'SET_APPLICATION_STYLE',
};

const reducer = (state, action) => {
	console.log(action);
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
		case actionTypes.SET_APPLICATION_STYLE:
			return {
				...state,
				style: action.style,
			};

		default:
			return state;
	}
};

export { initialState, actionTypes, reducer };
