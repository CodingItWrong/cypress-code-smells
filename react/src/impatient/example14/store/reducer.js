import {EXAMPLE14_SIGN_OUT, EXAMPLE14_INCREMENT} from './actions';

const initialState = {
  isSignedIn: true,
  guestCount: 0,
  memberCount: 0,
};

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE14_SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
      };
    case EXAMPLE14_INCREMENT:
      if (state.isSignedIn) {
        return {
          ...state,
          memberCount: state.memberCount + 1,
        };
      } else {
        return {
          ...state,
          guestCount: state.guestCount + 1,
        };
      }
    default:
      return state;
  }
}
