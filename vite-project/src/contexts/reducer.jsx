const initialState = {
	input: null,
};

const actionTypes = {
	SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_SEARCH_INPUT:
			return {
				...state,
				input: action.input,
			};

		default:
			return state;
	}
};

export { initialState, actionTypes, reducer };
