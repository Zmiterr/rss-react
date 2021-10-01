import React, { ReactElement, useState } from 'react';
import Loader from 'react-loader-spinner';
import ArticleList from '../../articleList';
import Form from '../../form';
// import { ICardItem } from '../../../types/types';
import storeSelector from '../../../hooks/useTypedSelector';
import '../../app/App.scss';

function Home(): ReactElement {
	// const [articles, setArticles] = useState<ICardItem[]>([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [pageCounter, setPageCounter] = useState(0);
	// const [totalResults, setTotalResults] = useState(0);
	// const [isDataStatus, setIsDataStatus] = useState('');
	const { pageCounter, pageSize, totalResults } = storeSelector(
		(state) => state.page
	);
	const { isLoading, isDataStatus } = storeSelector((state) => state.articles);

	return (
		<div className="App">
			<Form />

			{isDataStatus.trim() === '' ? (
				<div className="result">
					<p>
						Current page: {pageCounter}/{Math.ceil(totalResults / pageSize)}
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
				<ArticleList />
			)}
		</div>
	);
}

export default Home;
