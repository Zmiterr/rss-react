import React from "react";
import NavBar from './NavBar';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

describe("NavBar component", () => {
	it("should render NavBar component", () => {
		const component = shallow(<BrowserRouter><NavBar /></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});

