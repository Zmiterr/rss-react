import React from "react";
import Error from './Error';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() })


describe("Error component", () => {
	it("should render Error component", () => {
		const component = shallow(<BrowserRouter><Error /></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});

