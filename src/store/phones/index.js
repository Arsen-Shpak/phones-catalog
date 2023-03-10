import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export const phones = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
};
