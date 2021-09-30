import React, { ReactElement } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import Home from '../pages/Home';
import NavBar from '../navBar';
import About from '../pages/About';
import Details from '../pages/Details';
import Error404 from '../pages/Error404';

function App(): ReactElement {
	const location = useLocation();

	return (
		<div className="App">
			<NavBar />
			<TransitionGroup exit={false}>
				<CSSTransition classNames="transition" timeout={900} key={location.key}>
					<Switch location={location}>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/details/:id/" component={Details} />
						<Route component={Error404} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
}

export default App;
