
export default {
    CardList(state) {
      return state.cartList;
    },
    ItemsInCart(state) {
      return state.cartList.length;
    },
    OrderAccepted(state) {
      return state.orderAccepted;
    },
};