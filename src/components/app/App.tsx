import React, { ReactElement, useState } from 'react';

import './App.scss';
import Form from '../form';
import Card from '../card';

function App(): ReactElement {
	const [formValues, setFormValues] = useState([]);
	return (
		<div className="App">
			<Form setFormValues={setFormValues} />
			<div className="Card">
				{formValues.map((formItem, idx) => {
					return <Card formItem={formItem} key={idx} />;
				})}
			</div>
		</div>
	);
}

export default App;
