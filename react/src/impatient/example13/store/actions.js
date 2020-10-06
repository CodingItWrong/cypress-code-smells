import axios from 'axios';

export const EXAMPLE13_SIGN_OUT = 'EXAMPLE13_SIGN_OUT';
export const EXAMPLE13_INCREMENT = 'EXAMPLE13_INCREMENT';

export const signOut = dispatch => {
  axios.delete('http://localhost:3001/sessions/1').then(() => {
    dispatch(setSignedOut());
  });
};

const setSignedOut = () => ({
  type: EXAMPLE13_SIGN_OUT,
});

export const increment = () => ({
  type: EXAMPLE13_INCREMENT,
});
