import axios from 'axios';

const example3 = {
  namespaced: true,
  state: {
    count: null,
  },
  actions: {
    loadCountFromServer({commit}) {
      axios.get('/api/count.json').then(({data}) => {
        commit('setCount', data.count);
      });
    },
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    increment(state) {
      state.count += 1;
    },
  },
};

export default example3;
