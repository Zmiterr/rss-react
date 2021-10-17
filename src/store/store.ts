import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import pageReducer from './pageReducer';
import articlesReducer from './articlesReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	page: pageReducer,
	articles: articlesReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
