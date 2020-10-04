import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import example1 from './examples/example1/store/reducer';

const rootReducer = combineReducers({
  example1,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer()),
);

export default store;
