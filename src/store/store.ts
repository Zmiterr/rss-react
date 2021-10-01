import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({

});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
