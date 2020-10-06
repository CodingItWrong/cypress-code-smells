import axios from 'axios';

export const EXAMPLE7_REQUEST = 'EXAMPLE7_REQUEST';
export const EXAMPLE7_SET_COUNT = 'EXAMPLE7_SET_COUNT';
export const EXAMPLE7_INCREMENT = 'EXAMPLE7_INCREMENT';

export const loadCountFromServer = dispatch => {
  dispatch(request());
  axios.get('/api/count.json').then(({data}) => {
    dispatch(setCount(data.count));
  });
};

const request = () => ({
  type: EXAMPLE7_REQUEST,
});

const setCount = count => ({
  type: EXAMPLE7_SET_COUNT,
  count,
});

export const increment = () => ({
  type: EXAMPLE7_INCREMENT,
});
