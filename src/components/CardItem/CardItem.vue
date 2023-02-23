<template>
    <div class="card">
      <div class="card__image-container">
        <router-link :to="{ name: 'phonePage', params: { id:phone.itemId } }">
          <img 
            class="card__image" 
            :src="require('@/images/' + phone.image)" 
            alt="phone"
          />
        </router-link >
      </div>

      <router-link :to="{ name: 'phonePage', params: { id:phone.itemId }}">
        <p class="card__title">
          {{phone.title}} {{ phone.color }}
        </p>
      </router-link>

      <div class="card__price-container">
        <h2 class="card__current-price">
          ${{phone.price}}
        </h2>
        <h2 class="card__full-price">
          ${{phone.fullPrice}}
        </h2>
      </div>
      <hr class="card__line"/>
      <div class="card__info-container">
        <div class="card__info-raw">
          <span class="card__info-text">
            Screen
          </span>
          <span class="card__info-value">
            {{phone.screen}}
          </span>
        </div>
        <div class="card__info-raw">
          <span class="card__info-text">
            Capacity
          </span>
          <span class="card__info-value">
            {{ phone.capacity}}
          </span>
        </div>
        <div class="card__info-raw">
          <span class="card__info-text">
            RAM
          </span>
          <span class="card__info-value">
            {{phone.RAM}}
          </span>
        </div>
        <div class="card__info-raw">
          <span class="card__info-text">
            ItemId
          </span>
          <span class="card__info-value">
            {{phone.itemId}}
          </span>
        </div>
      </div>
      <div class="card__buttons-container">
        <button
          :class="[
            'card__add-button',
            {'card__add-button--is-selected': isInCart}
          ]"
          @click="handleShoppingCarts(phone)"
          >
          {{!isInCart
          ? 'Add to card'
          : 'Added'  }}
        </button>
        <button
          :class="[
            'card__like-button',
            {'card__like-button--is-selected': isInFavourites}
          ]"
          @click="handleFavourites(phone)"
        >
        </button>
      </div>
    </div>
</template>
<script>
import { mapMutations,mapGetters } from 'vuex';

export default {
  name: "CardItem",

  props: {
    phone: {
        type: Object,
        default() {
            return {}
        }
    }
  },

  // updated () {
  //   if (this.$route.params) {
  //     window.scrollTo(0, 0);
  //   }
  // },

  methods: {
    ...mapMutations({
      ADD_CARDLIST: 'cart/ADD_CARDLIST',
      MINUS_CARDLIST: 'cart/MINUS_CARDLIST',
      ADD_FAVOURITESLIST: 'favourites/ADD_FAVOURITESLIST',
      MINUS_FAVOURITESLIST: 'favourites/MINUS_FAVOURITESLIST'
    }),

    handleShoppingCarts(phone) {
      const InCart = this.CardList.find((item) => item.itemId === phone.itemId);
      if (InCart) {
        this.MINUS_CARDLIST(phone);
      }
      else {
        this.ADD_CARDLIST(phone);
      }
    },
    handleFavourites(phone) {
      const InFavourites = this.FavouritesList.find((item) => item.itemId === phone.itemId);
      if (InFavourites) {
        this.MINUS_FAVOURITESLIST(phone);
      }
      else {
        this.ADD_FAVOURITESLIST(phone);
      }
    }
  },

  computed: {
    ...mapGetters({ CardList: 'cart/CardList',FavouritesList:'favourites/FavouritesList' }),
    isInCart() {
     return this.CardList.find((item)=>item.itemId === this.phone.itemId)
    },
    isInFavourites() {
     return this.FavouritesList.find((item)=>item.itemId === this.phone.itemId)
    }
  },
}
</script>
<style lang="scss" scoped>

@import '@/styles/vars/vars.scss';
@import '@/styles/mixins/mixins';

.main__title{
    color:black;
    font-size:20px;
}

.card {
  flex-grow: 0;
  flex-shrink: 0;
  transition: outline 0.3s ease-out,
    box-shadow 0.3s ease-out,
    transform 0.3s ease-out;
  &:hover {
    outline: 1px solid #a378ff;
    box-shadow: rgba(144,91,255,1) 0px 1px 22px -8px inset;
    transform: scale(1.01);
  }
  @include mobile {
    width: 288px;
    max-height: 440px;
  }
  @include tablet {
    width: 278px;
    max-height: 506px;
  }
  @include desktop {
    width: 272px;
  }
  padding: 32px;
  background-color: $surface-1;
  &__image-container {
    display: flex;
    justify-content: center;
    @include mobile {
      height: 130px;
    }
    @include tablet {
      height: 200px;
    }
    margin-bottom: 24px;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    cursor: pointer;

    &--cursor-classic {
      cursor: auto;
    }
  }

  &__title {
    display: block;
    height: 42px;
    margin: 0 0 8px;
    padding: 0;
    text-align: left;
    font-family: Mont;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
    color: $white;
    cursor: pointer;
  }
  &__price-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    gap: 8px;
  }
  &__current-price {
    padding: 0px;
    margin: 0px;
    font-weight: 800;
    font-size: 22px;
    line-height: 140%;
    color: $white;
  }
  &__full-price {
    padding: 0px;
    margin: 0px;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    text-decoration-line: line-through;
    color: $secondary;
  }
  &__line {
    width: 100%;
    margin-bottom: 8px;
    border: 1px solid $elements;
  }
  &__info-container {
    margin-bottom: 12px;
    padding: 8px 0;
  }
  &__info-raw {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  &__info-text {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: $secondary;
  }
  &__info-value {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    color: $white;
  }
  &__buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    :hover {
      cursor: pointer;
    }
  }
  &__like-button {
    width: 40px;
    height: 40px;
    background-color: $surface-2;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/images/Like.svg');
    transition: background-color 0.3s;
    border: 0;
    padding: 0;
    &--is-selected {
      border: 1px solid $elements;
      background-color:red;
    }
    &:hover {
      background-color: $icons;
    }
  }
  &__add-button {
    height: 40px;
    flex-grow: 1;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: $white;
    transition: background-color 0.3s;
    background-color: $accent;
    border: 0;
    padding: 0;
    &--is-selected {
      background-color: $surface-2;
    }
    &:hover {
      background-color: $hover-accent;
    }
  }
}
</style>
