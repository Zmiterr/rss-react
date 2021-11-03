import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './Error.scss';

const Error = (): ReactElement => {
	return (
		<div className="error">
			<h2>404. Not found</h2>
			<Link to="/" className="error__link">
				Click! To redirect on Home page
			</Link>
		</div>
	);
};

export default Error;
