import { ActionTypes, IActionReducer } from '../types/actions';

const initialState = {
	page: 1,
	pageCounter: 0,
	pageSize: 10,
	totalResults: 0,
};

const pageReducer = (
	state = initialState,
	action: IActionReducer
): typeof initialState => {
	switch (action.type) {
		case ActionTypes.PAGE:
			return { ...state, page: action.payload };
		case ActionTypes.PAGE_COUNTER:
			return { ...state, pageCounter: action.payload };
		case ActionTypes.PAGE_SIZE:
			return { ...state, pageSize: action.payload };
		case ActionTypes.TOTAL_RESULTS:
			return { ...state, totalResults: action.payload };
		default:
			return state;
	}
};

export default pageReducer;
