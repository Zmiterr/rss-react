import React, { ReactElement, useState } from 'react';
import newsApi, { apiKey } from '../../services/api';
import { IFormProps, StatusCode } from '../../types/types';
import DropDown from '../dropDown';
import PageNumber from '../pageNumber';
import PageSize from '../pageSize';
import SearchPanel from '../search-panel';

import './Form.scss';

const Form = ({
	isLoading,
	setArticles,
	setPageCounter,
	setTotalResults,
	setIsLoading,
	setIsDataStatus,
}: IFormProps): ReactElement => {
	const [searchValue, setSearchValue] = useState('');
	const [sortBy, setSortBy] = useState('relevancy');
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const setErrorStatus = (status: number) => {
		if (status === StatusCode.ClientErrorBadRequest) {
			setIsDataStatus('Data not found. Try something else ..');
		}
		if (status === StatusCode.ClientErrorUpgradeRequired) {
			setIsDataStatus('Server side error. Enter other data..');
		}
		if (status === StatusCode.ClientErrorTooManyRequests) {
			setIsDataStatus('Limit of server requests. Try later..');
		}
		if (status === StatusCode.ServerErrorInternal) {
			setIsDataStatus('Server side error. Try later...');
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			const response = await newsApi.get(
				`v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
			);
			setArticles(response.data.articles);
			setTotalResults(response.data.totalResults);
			setIsDataStatus('');
		} catch (e) {
			setArticles([]);
			setErrorStatus(e.response.status);
			throw new Error(e);
		} finally {
			setIsLoading(false);
			setPageCounter(page);
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<SearchPanel
				isLoading={isLoading}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<DropDown sortBy={sortBy} setSortBy={setSortBy} />
			<PageSize pageSize={pageSize} setPageSize={setPageSize} />
			<PageNumber page={page} setPage={setPage} />
		</form>
	);
};

export default Form;
