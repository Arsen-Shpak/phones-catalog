import state from "./state";
import mutations from "./mutations";
import getters from "./getters";

export const cart = {
  state,
  mutations,
  getters,
  namespaced:true
};