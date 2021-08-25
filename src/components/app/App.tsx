import React, { ReactElement } from 'react';
import SearchPanel from '../search-panel';
import Card from '../card';

import './App.scss';

export default class App extends React.Component {
	render = (): ReactElement => {
		return (
			<div className="App">
				<SearchPanel />
				<Card />
			</div>
		);
	};
}
