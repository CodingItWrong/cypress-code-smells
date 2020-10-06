import {EXAMPLE3_SET_COUNT, EXAMPLE3_INCREMENT} from './actions';

const initialState = null;

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE3_SET_COUNT:
      return action.count;
    case EXAMPLE3_INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
