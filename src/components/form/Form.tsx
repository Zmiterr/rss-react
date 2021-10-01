import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import storeSelector from '../../hooks/useTypedSelector';
import newsApi, { apiKey } from '../../services/api';
import { StatusCode } from '../../types/types';
import { ActionTypes } from '../../types/actions';
import DropDown from '../dropDown';
import PageNumber from '../pageNumber';
import PageSize from '../pageSize';
import SearchPanel from '../search-panel';

import './Form.scss';

const Form = (): ReactElement => {
	const dispatch = useDispatch();
	const { searchValue, sortBy } = storeSelector((state) => state.articles);
	const { page, pageSize } = storeSelector((state) => state.page);

	const setErrorStatus = (status: number) => {
		const obj = {
			NOT_FOUND: 'Data not found. Try something else ..',
			SERV_LATE: 'Server side error. Try later...',
			SERV_DATA: 'Server side error. Enter other data..',
			SERV_LIMIT: 'Limit of server requests. Try later..',
		};
		if (status === StatusCode.ClientErrorBadRequest) {
			dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: obj.NOT_FOUND });
		}
		if (status === StatusCode.ClientErrorUpgradeRequired) {
			dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: obj.SERV_DATA });
		}
		if (status === StatusCode.ClientErrorTooManyRequests) {
			dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: obj.SERV_LATE });
		}
		if (status === StatusCode.ServerErrorInternal) {
			dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: obj.SERV_LIMIT });
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({ type: ActionTypes.GET_LOADING_SUCCESS, payload: true });
		try {
			const response = await newsApi.get(
				`v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
			);
			const { articles, totalResults } = response.data;

			dispatch({ type: ActionTypes.ADD_ARTICLE, payload: articles });
			dispatch({ type: ActionTypes.TOTAL_RESULTS, payload: totalResults });
			dispatch({ type: ActionTypes.GET_DATA_SUCCESS, payload: '' });
		} catch (e: any) {
			// TODO make type for error
			setErrorStatus(e.response.status);
			dispatch({ type: ActionTypes.ADD_ARTICLE, payload: [] });
			setErrorStatus(e.response.status);
			throw new Error(e);
		} finally {
			dispatch({ type: ActionTypes.GET_LOADING_SUCCESS, payload: false });
			dispatch({ type: ActionTypes.PAGE_COUNTER, payload: page });
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<SearchPanel searchValue={searchValue} />
			<DropDown sortBy={sortBy} />
			<PageSize pageSize={pageSize} />
			<PageNumber page={page} />
		</form>
	);
};

export default Form;
