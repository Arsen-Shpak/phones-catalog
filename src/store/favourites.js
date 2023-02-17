export const favourites = {
  state: () => ({
    favouritesList: [],
  }),
  getters: {
    FavouritesList(state) {
      return state.favouritesList;
    },
    ItemsInfavourites(state) {
      return state.favouritesList.length;
    },
  },
  mutations: {
    ADD_FAVOURITESLIST(state, newPhone) {
      state.favouritesList.push(newPhone);
    },
    MINUS_FAVOURITESLIST(state, currentPhone) {
      state.favouritesList = state.favouritesList.filter(
        (phone) => phone.itemId !== currentPhone.itemId
      );
    },
  },
  actions: {},
  namespaced: true,
};