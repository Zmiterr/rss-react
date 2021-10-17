import React from "react";
import Details from './Details';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';




Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
//TODO how to generate data from store?
//TODO how to emulate history, location?
	const enzymeWrapper = mount(<BrowserRouter><Details /></BrowserRouter>)

	return {
		enzymeWrapper
	}
}

describe('Article component', () => {

	it("should correct render title", () => {
		const { enzymeWrapper } = setup()
		expect(enzymeWrapper.find('h1').html()).toBe('<h1>Article details - 1</h1>')
	});
})
