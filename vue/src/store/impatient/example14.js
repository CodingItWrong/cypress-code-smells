import axios from 'axios';

const example14 = {
  namespaced: true,
  state: {
    isSignedIn: true,
    isSigningOut: false,
    guestCount: 27,
    memberCount: 42,
  },
  actions: {
    signOut({commit}) {
      commit('signOutRequest');
      axios.delete('http://localhost:3001/sessions/1').then(() => {
        commit('signOutSuccess');
      });
    },
  },
  mutations: {
    signOutRequest(state) {
      state.isSigningOut = true;
    },
    signOutSuccess(state) {
      state.isSigningOut = false;
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

export default example14;
