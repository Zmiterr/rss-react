import React, { ReactElement } from 'react';
import { ICardListProps } from '../../types/types';
import Article from '../article';

import './ArticleList.scss';

const ArticleList = ({ articles }: ICardListProps): ReactElement => {
	return (
		<ul className="cards__list">
			{articles.map((article, index) => {
				return <Article key={index} article={article} />;
			})}
		</ul>
	);
};

export default ArticleList;
