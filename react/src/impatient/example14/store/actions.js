import axios from 'axios';

export const EXAMPLE14_SIGN_OUT_REQUEST = 'EXAMPLE14_SIGN_OUT_REQUEST';
export const EXAMPLE14_SIGN_OUT_SUCCESS = 'EXAMPLE14_SIGN_OUT_SUCCESS';
export const EXAMPLE14_INCREMENT = 'EXAMPLE14_INCREMENT';

export const signOut = dispatch => {
  dispatch(signOutRequest());
  axios.delete('http://localhost:3001/sessions/1').then(() => {
    dispatch(signOutSuccess());
  });
};

const signOutRequest = () => ({
  type: EXAMPLE14_SIGN_OUT_REQUEST,
});

const signOutSuccess = () => ({
  type: EXAMPLE14_SIGN_OUT_SUCCESS,
});

export const increment = () => ({
  type: EXAMPLE14_INCREMENT,
});
