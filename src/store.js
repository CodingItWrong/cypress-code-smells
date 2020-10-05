import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import example3 from './unprepared/example3/store/reducer';
import example4 from './unprepared/example4/store/reducer';

const rootReducer = combineReducers({
  example3,
  example4,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer()),
);

export default store;
