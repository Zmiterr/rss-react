import React from "react";
import Article from './Article';
//test deps
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
	const props = {
		article: {
			author: 'string',
			content: 'string',
			description: 'string',
			publishedAt: 'string',
			source: { id: 'string', name: 'string' },
			title: 'real title',
			urlToImage: 'string',
			url: 'string'
		},
		index: 1
	}

	const enzymeWrapper = mount(<BrowserRouter><Article {...props} /></BrowserRouter>)

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
