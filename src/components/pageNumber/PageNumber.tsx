import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { IPageNumberProps } from '../../types/types';
import { setPageAct } from '../../types/actions';

import './PageNumber.scss';

const PageNumber = ({ page }: IPageNumberProps): ReactElement => {
	const dispatch = useDispatch();

	const setPage = (num: number) => {
		dispatch(setPageAct(num));
	};
	return (
		<div className="pageNumber">
			<label className="" htmlFor="pageNumber">
				Page:
				<input
					className="form__input"
					type="number"
					name="pageNumber"
					onChange={(e) => setPage(Number(e.target.value))}
					value={page}
					min="1"
				/>
			</label>
		</div>
	);
};

export default PageNumber;
