import React, { ReactElement } from 'react';
import storeSelector from '../../hooks/useTypedSelector';
import Article from '../article';

import './ArticleList.scss';

const ArticleList = (): ReactElement => {
	const { articles } = storeSelector((state) => state.articles);
	return (
		<ul className="cards__list">
			{articles.articles.map((article, index) => {
				return (
					<Article key={article.title} article={article} index={index + 1} />
				);
			})}
		</ul>
	);
};

export default ArticleList;
