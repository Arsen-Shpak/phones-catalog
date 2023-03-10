import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { cart } from "./cart1";
import { phones } from "./phones1";
import { favourites } from "./favourites1";

const store = new Vuex.Store({
  modules: {
    phones: phones,
    cart: cart,
    favourites: favourites,
  },
});
export default store;
