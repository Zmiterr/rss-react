import React, { ReactElement } from 'react';
import { ICardItemProps } from '../../types/types';

import './Article.scss';

const Article = ({ article }: ICardItemProps): ReactElement => {
	const { title, description, author, urlToImage } = article;

	return (
		<li className="card">
			<img className="card__image" src={urlToImage} alt={title} />
			<div className="card__content">
				<h4 className="card__name">{title}</h4>
				<p className="card__author">Source: {author || 'unknown'}</p>
				<p className="card__text">{description}</p>
			</div>
		</li>
	);
};

export default Article;
