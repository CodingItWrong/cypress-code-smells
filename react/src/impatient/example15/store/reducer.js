import {
  EXAMPLE15_SIGN_OUT_REQUEST,
  EXAMPLE15_SIGN_OUT_SUCCESS,
  EXAMPLE15_INCREMENT,
} from './actions';

const initialState = {
  isSignedIn: true,
  isSigningOut: false,
  guestCount: 0,
  memberCount: 0,
};

export default function example1(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE15_SIGN_OUT_REQUEST:
      return {
        ...state,
        isSigningOut: true,
      };
    case EXAMPLE15_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isSigningOut: false,
        isSignedIn: false,
      };
    case EXAMPLE15_INCREMENT:
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
