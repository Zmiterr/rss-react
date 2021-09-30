import React, { ReactElement } from 'react';
import { ICardListProps } from '../../types/types';
import Article from '../article';

import './ArticleList.scss';

const ArticleList = ({ articles }: ICardListProps): ReactElement => {
	return (
		<ul className="cards__list">
			{articles.map((article, index) => {
				return <Article key={index} article={article} index={index + 1} />;
			})}
		</ul>
	);
};

export default ArticleList;
