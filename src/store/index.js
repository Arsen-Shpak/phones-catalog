
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import { createStore } from 'vuex'
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

// export default createStore({
//   // state: {
//   //   phones: [],
//   // },
//   // getters: {
//   //   PHONES(state) {
//   //     return state.phones;
//   //   },
//   // },
//   // mutations: {
//   //   SET_PHONES_TO_STATE(state, phones) {
//   //     state.phones = phones;
//   //   },
//   // },
//   // actions: {
//   //   GET_PHONES_FROM_API({ commit }) {
//   //     return axios("http://localhost:3000/phones", {
//   //       method: "GET",
//   //     }).then((phones) => {
//   //       commit("SET_PHONES_TO_STATE", phones.data);
//   //       return phones;
//   //     }).catch(
//   //       (err) => {
//   //         console.log(err);
//   //         return err;
//   //       }

//   //     )
//   //   },
//   // },
//   modules: {
//     phones: phones,
//     cart: cart,
//     favourites: favourites,
//   },
// });
