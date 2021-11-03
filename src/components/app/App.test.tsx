import React from "react";
import App from './App';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
	it('should render correctly with no props', () => {
		const component = shallow(<BrowserRouter><App/></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
})
