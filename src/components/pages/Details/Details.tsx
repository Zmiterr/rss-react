import React, { ReactElement } from 'react';
import { Redirect, RouteComponentProps, useParams } from 'react-router-dom';
import { ICardItemProps, IDetailsParams } from '../../../types/types';

import './Details.scss';

const Details = (
	props: RouteComponentProps<{ history: string }, any, ICardItemProps>
): ReactElement => {
	const { id } = useParams<IDetailsParams>();

	if (!props.location.state) return <Redirect to="/" />;
	const propsState = props.location.state.article;
	const { title, description, author, urlToImage, url } = propsState;
	const date = new Date(propsState.publishedAt);

	return (
		<div className="details">
			<h1>Article details - {id}</h1>
			<p className="details__item">
				Author: <span className="details__content">{author}</span>
			</p>
			<p className="details__item">
				Published at:{' '}
				<span className="details__content">
					{date.toLocaleDateString()} in {date.toLocaleTimeString()}
				</span>
			</p>
			<p className="details__item">
				Title: <span className="details__content">{title}</span>
			</p>
			<p className="details__item">
				Description: <span className="details__content">{description}</span>
			</p>
			<p className="details__item">
				Url:{' '}
				<span className="details__content">
					<a href={url} title="Click to open this article">
						{url}
					</a>
				</span>
			</p>

			<img className="details__img" src={urlToImage} alt={title} />
		</div>
	);
};

export default Details;
