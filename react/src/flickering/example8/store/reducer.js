import {
  EXAMPLE8_REQUEST,
  EXAMPLE8_SET_COUNT,
  EXAMPLE8_INCREMENT,
} from './actions';

const initialState = {
  count: null,
  loading: true,
};

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE8_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EXAMPLE8_SET_COUNT:
      return {
        ...state,
        count: action.count,
        loading: false,
      };
    case EXAMPLE8_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
