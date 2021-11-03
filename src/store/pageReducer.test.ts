import { ActionTypes } from '../types/actions';
import pageReducer from './pageReducer';

const state = {
	page: 1,
	pageCounter: 0,
	pageSize: 10,
	totalResults: 0,
};

it('the page must be changed from 1 to 10', () => {
	const action = { type: ActionTypes.PAGE, payload: 10 };
	const newState = pageReducer(state, action);
	expect(newState.page).toBe(10);
});

it('the pageCounter must be changed from 0 to 10', () => {
	const action = { type: ActionTypes.PAGE_COUNTER, payload: 10 };
	const newState = pageReducer(state, action);
	expect(newState.pageCounter).toBe(10);
});

it('the pageSize must be changed from 10 to 60', () => {
	const action = { type: ActionTypes.PAGE_SIZE, payload: 60 };
	const newState = pageReducer(state, action);
	expect(newState.pageSize).toBe(60);
});

it('the totalResults must be changed from 0 to 3000', () => {
	const action = { type: ActionTypes.TOTAL_RESULTS, payload: 3000 };
	const newState = pageReducer(state, action);
	expect(newState.totalResults).toBe(3000);
});
