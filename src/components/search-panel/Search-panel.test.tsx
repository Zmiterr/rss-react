import React from "react";
import SearchPanel from './Search-panel';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';



Enzyme.configure({ adapter: new Adapter() })


describe("SearchPanel component", () => {
	it("should render SearchPanel component", () => {
		const component = shallow(<BrowserRouter><SearchPanel  searchValue={''}/></BrowserRouter>);
		expect(component).toMatchSnapshot();
	});
});
