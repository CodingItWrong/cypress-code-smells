import axios from 'axios';

export const EXAMPLE8_REQUEST = 'EXAMPLE8_REQUEST';
export const EXAMPLE8_SET_COUNT = 'EXAMPLE8_SET_COUNT';
export const EXAMPLE8_INCREMENT = 'EXAMPLE8_INCREMENT';

export const loadCountFromServer = dispatch => {
  dispatch(request());
  axios.get('http://localhost:3001/count').then(({data}) => {
    dispatch(setCount(data.count));
  });
};

const request = () => ({
  type: EXAMPLE8_REQUEST,
});

const setCount = count => ({
  type: EXAMPLE8_SET_COUNT,
  count,
});

export const increment = () => ({
  type: EXAMPLE8_INCREMENT,
});
