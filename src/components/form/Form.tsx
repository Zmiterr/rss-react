import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import storeSelector from '../../hooks/useTypedSelector';
import newsApi, { apiKey } from '../../services/api';
import { StatusCode } from '../../types/types';
import { getArticlesDataAction } from '../../types/actions';
import DropDown from '../dropDown';
import PageNumber from '../pageNumber';
import PageSize from '../pageSize';
import SearchPanel from '../search-panel';

import './Form.scss';

const Form = (): ReactElement => {
	const dispatch = useDispatch();
	const { searchValue, sortBy } = storeSelector((state) => state.articles);
	const { page, pageSize } = storeSelector((state) => state.page);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch(getArticlesDataAction(searchValue, sortBy, pageSize, page));
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
