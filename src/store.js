import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer()),
);

export default store;
