import { IApiError, ICardItem, StatusCode } from './types';
import newsApi, { apiKey } from '../services/api';
import { Dispatch } from 'redux';

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
	SET_ARTICLES = 'SET_ARTICLES',
	GET_DATA = 'GET_DATA',
}

const setErrorStatus = (status: number | string) => (dispatch: Dispatch) => {
	const errorDescription = {
		NOT_FOUND: 'Data not found. Try something else ..',
		SERV_LATE: 'Server side error. Try later...',
		SERV_DATA: 'Server side error. Enter other data..',
		SERV_LIMIT: 'Limit of server requests. Try later..',
	};
	if (status === StatusCode.ClientErrorBadRequest) {
		dispatch(setErrorStatusAct(errorDescription.NOT_FOUND));
	}
	if (status === StatusCode.ClientErrorUpgradeRequired) {
		dispatch(setErrorStatusAct(errorDescription.SERV_DATA));
	}
	if (status === StatusCode.ClientErrorTooManyRequests) {
		dispatch(setErrorStatusAct(errorDescription.SERV_LATE));
	}
	if (status === StatusCode.ServerErrorInternal) {
		dispatch(setErrorStatusAct(errorDescription.SERV_LIMIT));
	}
	dispatch(setErrorStatusAct(''));
};

export interface IActionReducer {
	type: string;
	payload?: any; // TODO is it OK?
}

export const setSearchValueAct = (value: string) => ({
	type: ActionTypes.SEARCH_VALUE,
	payload: value,
});

export const setSortByAct = (str: string) => ({
	type: ActionTypes.SORT_BY,
	payload: str,
});

export const setPageAct = (num: number) => ({
	type: ActionTypes.PAGE,
	payload: num,
});

export const setErrorStatusAct = (errorDescription: string) => ({
	type: ActionTypes.GET_DATA_SUCCESS,
	payload: errorDescription,
});

export const setLoadingSuccess = (isSuccess: boolean) => ({
	type: ActionTypes.GET_LOADING_SUCCESS,
	payload: isSuccess,
});

export const setArticleAct = (articles: ICardItem[]) => ({
	type: ActionTypes.ADD_ARTICLE,
	payload: articles,
});

export const setTotalResults = (totalResults: number) => ({
	type: ActionTypes.TOTAL_RESULTS,
	payload: totalResults,
});

export const setPageCounter = (page: number) => ({
	type: ActionTypes.PAGE_COUNTER,
	payload: page,
});

/*****/
export const setPageSizeAct = (num: number) => ({
	type: ActionTypes.PAGE_SIZE,
	payload: num,
});

/*****/
export const getArticlesDataAction =
	(searchValue: string, sortBy: string, pageSize: number, page: number) =>
	async (dispatch: Dispatch) => {
		dispatch(setLoadingSuccess(true));
		try {
			const {
				data: { articles, totalResults },
			} = await newsApi.get(
				`v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
			);
			dispatch(setArticlesAction(articles, totalResults));
			setErrorStatus('');
		} catch (e: any) {
			dispatch(setArticlesAction([], 0));
			setErrorStatus(e.response.status);
		} finally {
			dispatch(setLoadingSuccess(false));
			dispatch(setPageCounter(page));
		}
	};

export const setArticlesAction = (
	articles: ICardItem[],
	totalResults: number,
	errorStatus?: string
) => ({
	type: ActionTypes.SET_ARTICLES,
	payload: { articles, totalResults, errorStatus },
});
