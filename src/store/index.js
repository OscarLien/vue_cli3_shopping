import Vue from 'vue';
import Vuex from 'vuex';

import productsModules from './product';
import cartModules from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {
    productsModules,
    cartModules,
  },
});
