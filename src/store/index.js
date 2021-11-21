import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import bike from './bike';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    bike,
  },
});
