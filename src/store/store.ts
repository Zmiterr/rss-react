import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import pageReducer from './pageReducer';
import articlesReducer from './articlesReducer';
import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	page: pageReducer,
	articles: articlesReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
