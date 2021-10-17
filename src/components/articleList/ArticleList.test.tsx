import React from "react";
import ArticleList from './ArticleList';
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
//TODO how to generate data from store?
	const enzymeWrapper = mount(<BrowserRouter><ArticleList  /></BrowserRouter>)

	return {
		props,
		enzymeWrapper
	}
}

describe('Article component', () => {

	it("should correct render title", () => {
		const { enzymeWrapper } = setup()
		expect(enzymeWrapper.find('ul').html()).toMatchSnapshot();
	});
})
