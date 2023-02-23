export const cart = {
  state: () => ({
    cartList: [],
    orderAccepted: false,
  }),
  getters: {
    CardList(state) {
      return state.cartList;
    },
    ItemsInCart(state) {
      return state.cartList.length;
    },
    OrderAccepted(state) {
      return state.orderAccepted;
    },
  },
  mutations: {
    ADD_CARDLIST(state, newPhone) {
      state.cartList.push(newPhone);
    },
    ADD_COUNT(state, index) {
      let phone = state.cartList.find(
        (item, ind, arr) => arr.indexOf(item) === index
      );
      if (phone.count < 5) {
        phone.count++;
      }
    },
    REMOVE_COUNT(state, index) {
      let phone = state.cartList.find(
        (item, ind, arr) => arr.indexOf(item) === index
      );
      if (phone.count > 1) {
        phone.count--;
      }
    },
    MINUS_CARDLIST(state, currentPhone) {
      state.cartList = state.cartList.filter(
        (phone) => phone.itemId !== currentPhone.itemId
      );
    },
    ORDER_ACCEPT(state) {
      state.cartList = [];
      state.orderAccepted = true;
    },
  },
  actions: {},
  namespaced: true,
};