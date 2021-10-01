import React, { ReactElement, useState } from 'react';

import './App.scss';
import Form from '../form';
import Card from '../card';
import Modal from '../modal';

function App(): ReactElement {
	const [formValues, setFormValues] = useState([]);
	const [modalActive, setModalActive] = useState(false);

	return (
		<div className="App">
			<Form setFormValues={setFormValues} setModalActive={setModalActive} />
			<div className="Card">
				{formValues.map((formItem, idx) => {
					return <Card formItem={formItem} key={idx} />;
				})}
			</div>
			<Modal active={modalActive} setActive={setModalActive} />
		</div>
	);
}

export default App;
