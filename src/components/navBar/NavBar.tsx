import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = (): ReactElement => {
	return (
		<nav className="navbar">
			<div className="navbar__links">
				<NavLink exact to="/" activeClassName="active">
					Home
				</NavLink>
				<NavLink to="/about" activeClassName="active">
					About
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
