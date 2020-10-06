import {EXAMPLE4_SET_COUNT, EXAMPLE4_INCREMENT} from './actions';

const initialState = null;

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE4_SET_COUNT:
      return action.count;
    case EXAMPLE4_INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
