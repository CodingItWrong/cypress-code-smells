import Vue from 'vue';
import Vuex from 'vuex';
import example3 from './example3';
import example4 from './example4';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example3,
    example4,
  },
});
