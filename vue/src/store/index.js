import Vue from 'vue';
import Vuex from 'vuex';
import example3 from './unprepared/example3';
import example4 from './unprepared/example4';
import example7 from './flickering/example7';
import example8 from './flickering/example8';
import example13 from './impatient/example13';
import example14 from './impatient/example14';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example3,
    example4,
    example7,
    example8,
    example13,
    example14,
  },
});
