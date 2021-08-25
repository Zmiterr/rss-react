import React, { ReactElement } from 'react';
import SearchPanel from '../search-panel';

import './App.scss';

export default class App extends React.Component {
	render = (): ReactElement => {
		return (
			<div className="App">
				<SearchPanel />
			</div>
		);
	};
}
