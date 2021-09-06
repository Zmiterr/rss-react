import React, { ReactElement } from 'react';
import data from '../../data.json';

import './Card.scss';

export default class Card extends React.Component {
	render = (): ReactElement => {
		return (
			<div className="card">
				<div className="card__wrapper">
					{data.map((data, key) => {
						const { poster, title, year, description } = data;
						return (
							<div className="card__item" key={key}>
								<img className="card__item-poster" src={poster} alt={title} />
								<div className="card__item-content">
									<h3 className="card__item-title">{title}</h3>
									<span className="card__item-year">({year})</span>
									<p className="card__item-text">{description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	};
}
