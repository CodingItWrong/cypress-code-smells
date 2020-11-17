import axios from 'axios';

export const EXAMPLE14_SIGN_OUT = 'EXAMPLE14_SIGN_OUT';
export const EXAMPLE14_INCREMENT = 'EXAMPLE14_INCREMENT';

export const signOut = dispatch => {
  axios.delete('http://localhost:3001/sessions/1').then(() => {
    dispatch(setSignedOut());
  });
};

const setSignedOut = () => ({
  type: EXAMPLE14_SIGN_OUT,
});

export const increment = () => ({
  type: EXAMPLE14_INCREMENT,
});
