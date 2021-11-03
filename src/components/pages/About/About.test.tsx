import React from "react";
import About from './About';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() })


describe("About component", () => {
	it("should render About component", () => {
		const component = shallow(<BrowserRouter><About /></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});
