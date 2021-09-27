import React, { ReactElement } from 'react';
import { IPageNumberProps } from '../../types/types';

import './PageNumber.scss';

const PageNumber = ({ page, setPage }: IPageNumberProps): ReactElement => {
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
