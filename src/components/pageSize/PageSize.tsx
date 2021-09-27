import React, { ReactElement } from 'react';
import { IPageSizeProps } from '../../types/types';

import './PageSize.scss';

const PageSize = ({ pageSize, setPageSize }: IPageSizeProps): ReactElement => {
	return (
		<div className="pageSize">
			<label htmlFor="pageSize">
				Result per page:
				<select
					className="form__select"
					name="pageSize"
					onChange={(e) => setPageSize(Number(e.target.value))}
					value={pageSize}
				>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="60">60</option>
				</select>
			</label>
		</div>
	);
};

export default PageSize;
