import {
  EXAMPLE14_SIGN_OUT_REQUEST,
  EXAMPLE14_SIGN_OUT_SUCCESS,
  EXAMPLE14_INCREMENT,
} from './actions';

const initialState = {
  isSignedIn: true,
  isSigningOut: false,
  guestCount: 0,
  memberCount: 0,
};

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE14_SIGN_OUT_REQUEST:
      return {
        ...state,
        isSigningOut: true,
      };
    case EXAMPLE14_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isSigningOut: false,
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
