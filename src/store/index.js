import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { cart } from "./cart";
import { phones } from "./phones";
import { favourites } from "./favourites";

const store = new Vuex.Store({
  modules: {
    phones: phones,
    cart: cart,
    favourites: favourites,
  },
});
export default store;
