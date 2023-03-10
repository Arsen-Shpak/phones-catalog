import axios from "axios";

export default {
  async GET_PHONES_FROM_API({ commit }) {
    try {
      const response = await axios.get("http://localhost:3000/phones");
      commit("SET_PHONES_TO_STATE", response.data);
      return response.data;
    } catch (err) {
      alert("Error", err);
    }
  },
  async GET_CURRENT_PHONE({ dispatch, commit }, id) {
    try {
      const phones = await dispatch("GET_PHONES_FROM_API");
      const currentPhone = phones.find((element) => element.itemId === id);
      commit("SET_CURRENT_PHONE", currentPhone);
      console.log(currentPhone);
    } catch (err) {
      alert("Error", err);
    }
  },
};