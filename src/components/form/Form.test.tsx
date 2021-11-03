import React from "react";
import Form from './Form';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })


describe("Form component", () => {
	it("should render Form component", () => {
		const component = shallow(<BrowserRouter><Form /></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});
