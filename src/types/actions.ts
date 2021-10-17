import { ICardItem } from './types';

export enum ActionTypes {
	ADD_ARTICLE = 'ADD_ARTICLE',
	SEARCH_VALUE = 'SEARCH_VALUE',
	SORT_BY = 'SORT_BY',
	PAGE = 'PAGE',
	PAGE_COUNTER = 'PAGE_COUNTER',
	PAGE_SIZE = 'PAGE_SIZE',
	TOTAL_RESULTS = 'TOTAL_RESULTS',
	GET_LOADING_SUCCESS = 'GET_LOADING_SUCCESS',
	GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
}

export interface IActionReducer {
	type: string;
	payload?: any; // TODO is it OK?
}

export const setSearchValueAct = (value: string) => ({
	type: ActionTypes.SEARCH_VALUE,
	payload: value
})

export const setSortByAct = (str: string) => ({
	type: ActionTypes.SORT_BY,
	payload: str
})

export const setPageAct = (num: number) => ({
	type: ActionTypes.PAGE,
	payload: num
})

export const setErrorStatusAct = (errorDescription: string) => ({
	type: ActionTypes.GET_DATA_SUCCESS,
	payload: errorDescription
})

export const setLoadingSuccess = (isSuccess : boolean) => ({
	type: ActionTypes.GET_LOADING_SUCCESS,
	payload: isSuccess
})

export const setArticleAct = (articles: ICardItem[]) => ({
	type: ActionTypes.ADD_ARTICLE,
	payload: articles
})

export const setTotalResults = (totalResults: number) => ({
	type: ActionTypes.TOTAL_RESULTS,
	payload: totalResults
})

export const setPageCounter = (page: number) => ({
	type: ActionTypes.PAGE_COUNTER,
	payload: page
})

/*****/
export const setPageSizeAct = (num: number) => ({
	type: ActionTypes.PAGE_SIZE,
	payload: num
})
