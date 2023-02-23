import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { phones } from '@/store/phones.js';
import { cart } from '@/store/cart.js';
import { favourites } from '@/store/favourites.js';

let store = new Vuex.Store({
  modules: {
    phones: phones,
    cart: cart,
    favourites: favourites,
  },
});
export default store;
