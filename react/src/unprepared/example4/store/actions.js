import axios from 'axios';

export const EXAMPLE4_SET_COUNT = 'EXAMPLE4_SET_COUNT';
export const EXAMPLE4_INCREMENT = 'EXAMPLE4_INCREMENT';

export const loadCountFromServer = dispatch => {
  axios.get('http://localhost:3001/count').then(({data}) => {
    dispatch(setCount(data.count));
  });
};

const setCount = count => ({
  type: EXAMPLE4_SET_COUNT,
  count,
});

export const increment = () => ({
  type: EXAMPLE4_INCREMENT,
});
