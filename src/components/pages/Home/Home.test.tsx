import React from "react";
import Home from './Home';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';



Enzyme.configure({ adapter: new Adapter() })


describe("Home component", () => {
	it("should render Home component", () => {
		const component = shallow(<BrowserRouter><Home /></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});
