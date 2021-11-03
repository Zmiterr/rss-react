import React from "react";
import PageSize from './PageSize';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

describe("PageSize component", () => {
	it("should render PageSize component", () => {
		const component = shallow(<BrowserRouter><PageSize  pageSize={50}/></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});
