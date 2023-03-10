<template>
  <div class='favourites'>
    <div class='
      grid
      grid-mobile
      grid-tablet
      grid-desktop'
    >
      <h1 class='
        favourites__title
        grid-mobile-1-5
        grid-tablet-1-13
        grid-desktop-1-25'
      >
        Favourites
      </h1>
      <p class='
        favourites__product-count
        grid-mobile-1-5
        grid-tablet-1-7
        grid-desktop-1-25'
      >
        {{ItemsInfavourites}} items
      </p>

      <div 
        v-if="ItemsInfavourites !==0" 
        class='
            favourites__items-wrapper
            grid-mobile-1-5
            grid-tablet-1-13
            grid-desktop-1-25
        '
      >
        <ul class='product-items__list'>
          <li
            class='favorites__product-item'
            v-for="phone in FavouritesList"
            :key="phone.itemId"
          >
            <CardItem :phone="phone"/>
          </li>
        </ul>
      </div>
        
      <h3  
        v-if="ItemsInfavourites === 0" 
        class='favourites__empty-box
          grid-mobile-1-5
          grid-tablet-1-13
          grid-desktop-1-25'
      >
        No products in the favourites
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardItem from "@/components/CardItem/CardItem.vue";

export default {
  components: { CardItem },
  
  computed: {
    ...mapGetters ({
      ItemsInfavourites: "favourites/ItemsInfavourites",
      FavouritesList: "favourites/FavouritesList"
    }),
  },
 
}
</script>

<style lang="scss" scoped>

@import "@/styles/mixins/mixins";
@import "@/styles/vars/vars.scss";

.favourites {
  flex: 1;
  padding-left: 16px;
  margin-bottom: 24px;

  @include tablet {
    padding: 0 24px;
  }

  @include desktop {
    padding: 0 32px;
    margin: 0 auto 32px;
  }

  &__title {
    grid-row: 1 / 2;
    margin: 0 0 8px;
    padding: 0;
    font-weight: 800;
    font-size: 32px;
    line-height: 41px;
    color: #F1F2F9;
  }

  &__items-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__product-count {
    grid-row: 2/3;
    margin: 0 0 32px;
    padding: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #75767F;
  }

  &__empty-box {
    width: 100%;
    color: $white;
    font-size: 24px;
    letter-spacing: -0.01em;
  }
}

.product-items__list {
  display: flex;
  flex-wrap: wrap;
  width: 288px;
  row-gap: 40px;
  column-gap: 16px;
  margin-bottom: 24px;

  @include tablet {
    width: 572px;
  }

  @media (min-width: 978px) {
    width: 866px;
  }

  @include desktop {
    width: 1136px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>