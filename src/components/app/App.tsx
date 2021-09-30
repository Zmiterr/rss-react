import React, { ReactElement, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import ArticleList from '../articleList';
import Form from '../form';
import { ICardItem } from '../../types/types';
import './App.scss';
import NavBar from '../navBar';
import About from '../pages/About';
import Error404 from '../pages/Error404';

function App(): ReactElement {
	const location = useLocation();
	const [articles, setArticles] = useState<ICardItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [pageCounter, setPageCounter] = useState(0);
	const [totalResults, setTotalResults] = useState(0);
	const [isDataStatus, setIsDataStatus] = useState('');

	return (
		<div className="App">
			<NavBar />
			<Switch location={location}>
				<Route exact path="/about" component={About} />
				<Route component={Error404} />
			</Switch>
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
					<Loader type="Audio" color="#FFCBCB" height={70} width={70} />
				</div>
			) : (
				<ArticleList articles={articles} />
			)}
		</div>
	);
}

export default App;
