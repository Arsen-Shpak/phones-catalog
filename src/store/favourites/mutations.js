export default {
    ADD_FAVOURITESLIST(state, newPhone) {
      state.favouritesList.push(newPhone);
    },
    MINUS_FAVOURITESLIST(state, currentPhone) {
      state.favouritesList = state.favouritesList.filter(
        (phone) => phone.itemId !== currentPhone.itemId
      );
    },
};