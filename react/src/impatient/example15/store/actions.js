import axios from 'axios';

export const EXAMPLE15_SIGN_OUT_REQUEST = 'EXAMPLE15_SIGN_OUT_REQUEST';
export const EXAMPLE15_SIGN_OUT_SUCCESS = 'EXAMPLE15_SIGN_OUT_SUCCESS';
export const EXAMPLE15_INCREMENT = 'EXAMPLE15_INCREMENT';

export const signOut = dispatch => {
  dispatch(signOutRequest());
  axios.delete('http://localhost:3001/sessions/1').then(() => {
    dispatch(signOutSuccess());
  });
};

const signOutRequest = () => ({
  type: EXAMPLE15_SIGN_OUT_REQUEST,
});

const signOutSuccess = () => ({
  type: EXAMPLE15_SIGN_OUT_SUCCESS,
});

export const increment = () => ({
  type: EXAMPLE15_INCREMENT,
});
