import {
  EXAMPLE7_REQUEST,
  EXAMPLE7_SET_COUNT,
  EXAMPLE7_INCREMENT,
} from './actions';

const initialState = {
  count: null,
  loading: false,
};

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE7_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EXAMPLE7_SET_COUNT:
      return {
        ...state,
        count: action.count,
        loading: false,
      };
    case EXAMPLE7_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
