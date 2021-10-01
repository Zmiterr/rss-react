import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { ISearchPanelProps } from '../../types/types';
import { ActionTypes } from '../../types/actions';
import './Search-panel.scss';
import storeSelector from '../../hooks/useTypedSelector';

const SearchPanel = ({ searchValue }: ISearchPanelProps): ReactElement => {
	const dispatch = useDispatch();
	const setSearchValue = (str: string) => {
		dispatch({ type: ActionTypes.SEARCH_VALUE, payload: str });
	};
	const { isLoading } = storeSelector((state) => state.articles);
	return (
		<label htmlFor="search">
			<div className="search">
				<input
					type="text"
					className="searchTerm"
					name="search"
					placeholder="What are you looking for?"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					disabled={isLoading}
				/>
				<button type="submit" className="searchButton">
					<i className="searchImg" />
				</button>
			</div>
		</label>
	);
};

export default SearchPanel;
