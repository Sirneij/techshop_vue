import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/product";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    products
  }
});
