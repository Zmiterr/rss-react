import React, { ReactElement } from 'react';
import { ISearchPanelProps } from '../../types/types';

import './Search-panel.scss';

const SearchPanel = ({
	isLoading,
	searchValue,
	setSearchValue,
}: ISearchPanelProps): ReactElement => {
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
