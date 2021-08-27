import React, { ReactElement, useState } from 'react';

import './App.scss';
import Form from '../form';

function App(): ReactElement {
	const [formValues, setFormValues] = useState([]);
	return (
		<div className="App">
			<Form setFormValues={setFormValues} />
		</div>
	);
}

export default App;
