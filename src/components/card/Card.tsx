import React, { ReactElement } from 'react';
import ICardProps from '../../models/card/ICardProps';

import './Card.scss';

const Card = ({ formItem }: ICardProps): ReactElement => {
	const { firstName, birthDate, race, gender } = formItem;

	return (
		<div className="Card__item">
			<div>
				First Name: <span>{firstName}</span>
			</div>
			<div>
				Birth Date: <span>{birthDate}</span>
			</div>
			<div>
				Race: <span>{race}</span>
			</div>
			<div>
				Gender: <span>{gender === 'Male' ? 'Male' : 'Female'}</span>
			</div>
		</div>
	);
};

export default Card;
