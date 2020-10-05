import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import example3 from './unprepared/example3/store/reducer';
import example4 from './unprepared/example4/store/reducer';
import example7 from './flickering/example7/store/reducer';
import example8 from './flickering/example8/store/reducer';
import example13 from './impatient/example13/store/reducer';
import example14 from './impatient/example14/store/reducer';

const rootReducer = combineReducers({
  example3,
  example4,
  example7,
  example8,
  example13,
  example14,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer()),
);

export default store;
