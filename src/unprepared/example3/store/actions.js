import axios from 'axios';

export const EXAMPLE3_SET_COUNT = 'EXAMPLE3_SET_COUNT';
export const EXAMPLE3_INCREMENT = 'EXAMPLE3_INCREMENT';

export const loadCountFromServer = dispatch => {
  setTimeout(() => {
    axios.get('/api/count.json').then(({data}) => {
      dispatch(setCount(data.count));
    });
  }, 1000); // simulate delay
};

const setCount = count => ({
  type: EXAMPLE3_SET_COUNT,
  count,
});

export const increment = () => ({
  type: EXAMPLE3_INCREMENT,
});
