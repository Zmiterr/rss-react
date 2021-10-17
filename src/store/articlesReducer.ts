import { ActionTypes, IActionReducer } from '../types/actions';
import { ICardItem } from '../types/types';

const initialState: {
	articles: { articles: ICardItem[]; totalResults: number };
	searchValue: string;
	sortBy: string;
	isLoading: boolean;
	isDataStatus: string;
} = {
	articles: { articles: [], totalResults: 0 },
	searchValue: '',
	sortBy: 'relevancy',
	isLoading: false,
	isDataStatus: '',
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
		case ActionTypes.GET_LOADING_SUCCESS:
			return { ...state, isLoading: action.payload };
		case ActionTypes.GET_DATA_SUCCESS:
			return { ...state, isDataStatus: action.payload };
		case ActionTypes.SET_ARTICLES:
			return { ...state, articles: action.payload };
		default:
			return state;
	}
};

export default articlesReducer;
