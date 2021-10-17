import React from "react";
import DropDown from './DropDown';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })


describe("DropDown component", () => {
	it("should render DropDown component", () => {
		const component = shallow(<BrowserRouter><DropDown  sortBy={'Relevancy'}/></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});

