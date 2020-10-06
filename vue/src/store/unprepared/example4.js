import axios from 'axios';

const example4 = {
  namespaced: true,
  state: {
    count: null,
  },
  actions: {
    loadCountFromServer({commit}) {
      // setTimeout seems to be necessary in Vue to get it to fail
      setTimeout(() => {
        axios.get('/api/count.json').then(({data}) => {
          commit('setCount', data.count);
        });
      }, 1000);
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

export default example4;
