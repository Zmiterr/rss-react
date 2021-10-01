import { ActionTypes, IActionReducer } from '../types/actions';

const initialState = {
	articles: [],
	searchValue: '',
	sortBy: 'relevancy',
};

const articlesReducer = (
	state = initialState,
	action: IActionReducer
): typeof initialState => {
	switch (action.type) {
		case ActionTypes.ADD_ARTICLE:
			return { ...state, articles: action.payload };
		case ActionTypes.SEARCH_VALUE:
			return { ...state, searchValue: action.payload };
		case ActionTypes.SORT_BY:
			return { ...state, sortBy: action.payload };
		default:
			return state;
	}
};

export default articlesReducer;
