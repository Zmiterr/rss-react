import React, { ReactElement } from 'react';
import { IDropDownProps } from '../../types/types';

import './DropDown.scss';

const DropDown = ({ sortBy, setSortBy }: IDropDownProps): ReactElement => {
	return (
		<div className="sort">
			<label htmlFor="sortBy">
				Sort by:
				<select
					className="form__select"
					name="sortBy"
					onChange={(e) => setSortBy(e.target.value)}
					value={sortBy}
				>
					<option value="relevancy">Relevancy</option>
					<option value="popularity">Popularity</option>
					<option value="publishedAt">Date</option>
				</select>
			</label>
		</div>
	);
};

export default DropDown;
