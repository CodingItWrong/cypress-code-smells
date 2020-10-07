import axios from 'axios';

const example13 = {
  namespaced: true,
  state: {
    isSignedIn: true,
    guestCount: 27,
    memberCount: 42,
  },
  actions: {
    signOut({commit}) {
      axios.delete('http://localhost:3001/sessions/1').then(() => {
        commit('setSignedOut');
      });
    },
  },
  mutations: {
    setSignedOut(state) {
      state.isSignedIn = false;
    },
    increment(state) {
      if (state.isSignedIn) {
        state.memberCount += 1;
      } else {
        state.guestCount += 1;
      }
    },
  },
};

export default example13;
