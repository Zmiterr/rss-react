import React from "react";
import Details from './Details';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';



Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
	const props = {

	}

	const enzymeWrapper = mount(<BrowserRouter><Details history={''} location={'undefined'} match={'undefined'}  /></BrowserRouter>)

	return {
		props,
		enzymeWrapper
	}
}

describe('Article component', () => {

	it("should correct render title", () => {
		const { enzymeWrapper } = setup()
		expect(enzymeWrapper.find('h4').html()).toBe('<h4 class=\"card__name\">real title</h4>')
	});
})
