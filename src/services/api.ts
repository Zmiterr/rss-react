import axios from 'axios';

export const apiKey = '0b19e05dd1dc4a5eaaa823a20ed7d749';

const newsApi = axios.create({
	baseURL: 'https://newsapi.org/',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default newsApi;
