import React, { ReactElement, useState } from 'react';
import Loader from 'react-loader-spinner';
import CardList from '../cardList';
import Form from '../form';
import { ICardItem } from '../../types/types';

import './App.scss';

function App(): ReactElement {
	const [articles, setArticles] = useState<ICardItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [pageCounter, setPageCounter] = useState(0);
	const [totalResults, setTotalResults] = useState(0);
	const [isDataStatus, setIsDataStatus] = useState('');

	return (
		<div className="App">
			<Form
				isLoading={isLoading}
				setArticles={setArticles}
				setPageCounter={setPageCounter}
				setIsLoading={setIsLoading}
				setTotalResults={setTotalResults}
				setIsDataStatus={setIsDataStatus}
			/>

			{isDataStatus.trim() === '' ? (
				<div className="result">
					<p>
						Current page: {pageCounter}/{Math.ceil(totalResults / 10)}
					</p>
					<p>Total Results: {totalResults}</p>
					<p>{isDataStatus}</p>
				</div>
			) : (
				<p>{isDataStatus}</p>
			)}

			{isLoading ? (
				<div className="loader">
					<Loader type="Oval" color="#00BFFF" height={70} width={70} />
				</div>
			) : (
				<CardList articles={articles} />
			)}
		</div>
	);
}

export default App;
