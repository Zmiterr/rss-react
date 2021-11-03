import React from "react";
import PageNumber from './PageNumber';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';



Enzyme.configure({ adapter: new Adapter() })

describe("PageNumber component", () => {
	it("should render PageNumber component", () => {
		const component = shallow(<BrowserRouter><PageNumber  page={1}/></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});

