import { ActionTypes } from '../types/actions';
import articlesReducer from './articlesReducer';

const state = {
	articles: [],
	searchValue: '',
	sortBy: 'relevancy',
	isLoading: false,
	isDataStatus: '',
};

it('length of articles should be incremented', () => {
	const action = { type: ActionTypes.ADD_ARTICLE, payload: [{ test: 'test' }] };
	const newState = articlesReducer(state, action);
	expect(newState.articles.length).toBe(1);
});

it('searchValue should be changed on apply', () => {
	const action = { type: ActionTypes.SEARCH_VALUE, payload: 'apply' };
	const newState = articlesReducer(state, action);
	expect(newState.searchValue).toBe('apply');
});

it('sortBy should be changed on sortWork', () => {
	const action = { type: ActionTypes.SORT_BY, payload: 'sortWork' };
	const newState = articlesReducer(state, action);
	expect(newState.sortBy).toBe('sortWork');
});

it('isLoading should be true', () => {
	const action = { type: ActionTypes.GET_LOADING_SUCCESS, payload: true };
	const newState = articlesReducer(state, action);
	expect(newState.isLoading).toBe(true);
});

it('isDataStatus should be error', () => {
	const action = { type: ActionTypes.GET_DATA_SUCCESS, payload: 'error' };
	const newState = articlesReducer(state, action);
	expect(newState.isDataStatus).toBe('error');
});

