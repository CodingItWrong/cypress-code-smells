import axios from 'axios';

const example8 = {
  namespaced: true,
  state: {
    count: null,
    loading: true,
  },
  actions: {
    loadCountFromServer({commit}) {
      setTimeout(() => {
        commit('request');
        axios.get('/api/count.json').then(({data}) => {
          commit('setCount', data.count);
        });
      }, 0);
    },
  },
  mutations: {
    request(state) {
      state.loading = true;
    },
    setCount(state, count) {
      state.count = count;
      state.loading = false;
    },
    increment(state) {
      state.count += 1;
    },
  },
};

export default example8;
