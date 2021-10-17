import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { IDropDownProps } from '../../types/types';
import { setSortByAct } from '../../types/actions';

import './DropDown.scss';

const DropDown = ({ sortBy }: IDropDownProps): ReactElement => {
	const dispatch = useDispatch();

	const setSortBy = (str: string) => {
		dispatch(setSortByAct(str));
	};
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
