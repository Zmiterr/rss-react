import React, { ReactElement } from 'react';

import './Search-panel.scss';

export default class SearchPanel extends React.Component {
	render = (): ReactElement => {
		return (
			<div className="wrap">
				<div className="search">
					<input type="text" className="searchTerm" placeholder="Search" />
					<button type="submit" className="searchButton">
						<i className="searchImg" />
					</button>
				</div>
			</div>
		);
	};
}
