<template>
  <div class='item-card'>
    <div 
      v-if="CURRENT_PHONE"
      class='item-card__phone-card phone-card grid grid-mobile grid-tablet grid-desktop'
    >  
      <h1 class='phone-card__title grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25'>
        {{CURRENT_PHONE.title}}
      </h1>

      <div class="phone-card__main-image-box grid-mobile-1-5 grid-tablet-2-8 grid-desktop-3-13">
        <ItemMainImage 
          :imageLink="CURRENT_PHONE.image"
          :altName="CURRENT_PHONE.title"  
        />
      </div>

      <div class="phone-card__other-photo-box grid-mobile-1-5 grid-tablet-1-2 grid-desktop-1-3">
        <ItemImageBar
          :images="avaibleImages"
          :currentImage="CURRENT_PHONE.image"
          @changeImage="handleImageChange"
          :altName="CURRENT_PHONE.title"
        />
      </div> 

      <div class="phone-card__short-info short-info grid-mobile-1-5 grid-tablet-8-13 grid-desktop-14-21">
        <div class="short-info__phone-id">
          ID: 802301
        </div>

        <div class="short-info__colors available-colors">
          <ItemAvailableColors
            :colorsAvailable="CURRENT_PHONE.colorsAvailable"
            :currentColor="CURRENT_PHONE.color"
            @changeColor="handleColorChange"
          />
        </div>

        <div class="short-info__capacity available-capacity">
          <ItemAvailableCapacity
            :capacityAvailable="CURRENT_PHONE.capacityAvailable"
            :currentCapacity="CURRENT_PHONE.capacity"
            @changeCapacity="handleCapacityChange"
          />
        </div>

        <div class="short-info__price-container item-prices">
          <ItemPrices
            :price="CURRENT_PHONE.price"
            :fullPrice="CURRENT_PHONE.fullPrice"
          />
        </div>

        <div class="short-info__buttons-container">
          <button
            :class="[
              'short-info__add-button',
              {'short-info__add-button--is-selected': isInCart}
            ]"
            
            @click="handleShoppingCarts(CURRENT_PHONE)"
          >
            {{!isInCart
              ? 'Add to cart'
              : 'Added'}}
          </button>

          <button
            :class="['short-info__like-button',
              {'short-info__like-button--is-selected': isInFavourites}
            ]"
            
            @click="handleFavourites(CURRENT_PHONE)"
          >
          </button>
        </div>

        <div class="short-info__properties item-properties">
          <ItemProperties
            :propertiesOfItem="propertiesOfItem"
            :additionalClasses="[]"
          />
        </div>
      </div>

      <div class="phone-card__about item-about grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-13">
        <ItemAbout
          :description="CURRENT_PHONE.description"
        />
      </div>

      <div class="phone-card__technical grid-mobile-1-5 grid-tablet-1-13 grid-desktop-14-25">
        <h4 class="phone-card__technical-title">
          Tech specs
        </h4>

        <div class="short-info__properties item-properties">
          <ItemProperties
            :propertiesOfItem="itemTechProperties"
            :additionalClasses="[
              'item-properties__name--font-size', 
              'item-properties__value--font-size'
            ]"
          />
        </div>
      </div>
    </div>

    <div 
      v-if="CURRENT_PHONE" 
      class="item-card__carusel"
    >
      <ProductsCarusel
          orderType="random"
          title="You may also like"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions,mapMutations } from 'vuex';
import ProductsCarusel from "@/components/ProductsCarusel/ProductsCarusel.vue";
import ItemAvailableCapacity from "@/components/ItemAvailableCapacity/ItemAvailableCapacity.vue";
import ItemProperties from "@/components/ItemProperties/ItemProperties.vue";
import ItemAbout from "@/components/ItemAbout/ItemAbout.vue";
import ItemPrices from "@/components/ItemPrices/ItemPrices.vue";
import ItemAvailableColors from "@/components/ItemAvailableColors/ItemAvailableColors.vue";
import ItemImageBar from "@/components/ItemImageBar/ItemImageBar.vue";
import ItemMainImage from '@/components/ItemMainImage/ItemMainImage.vue';
export default {
    components:{
      ProductsCarusel,
      ItemAvailableCapacity,
      ItemProperties,
      ItemAbout,
      ItemPrices,
      ItemAvailableColors,
      ItemImageBar,
      ItemMainImage
    },
    
    methods: {
      ...mapActions({ GET_CURRENT_PHONE: "phones/GET_CURRENT_PHONE" }),
      ...mapMutations({
          ADD_CARDLIST: 'cart/ADD_CARDLIST',
          MINUS_CARDLIST: 'cart/MINUS_CARDLIST',
          ADD_FAVOURITESLIST: 'favourites/ADD_FAVOURITESLIST',
          MINUS_FAVOURITESLIST: 'favourites/MINUS_FAVOURITESLIST'
      }),
      handleCapacityChange(newCapacity) {
        this.CURRENT_PHONE.capacity = newCapacity;
        const ind = this.CURRENT_PHONE.capacityAvailable.indexOf(newCapacity);
        this.CURRENT_PHONE.price = this.CURRENT_PHONE.availablePrice[ind];
        this.CURRENT_PHONE.fullPrice = this.CURRENT_PHONE.avaibleFullPrice[ind];
      },
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
      },
      handleColorChange(newColor) {
        this.CURRENT_PHONE.color = newColor;
        this.CURRENT_PHONE.image = this.avaibleImages[0];
      },
      handleImageChange(newImage) {
        this.CURRENT_PHONE.image = newImage
      }
    },
    
    computed: {
      ...mapGetters({
        CURRENT_PHONE: "phones/CURRENT_PHONE",
        CardList: 'cart/CardList',
        FavouritesList: 'favourites/FavouritesList'
      }),
      isInCart() {
        return this.CardList.find((item)=>item.itemId === this.CURRENT_PHONE.itemId)
      },
      isInFavourites() {
        return this.FavouritesList.find((item)=>item.itemId === this.CURRENT_PHONE.itemId)
      },
      propertiesOfItem() {
        return {
          Screen: this.CURRENT_PHONE.screen,
          Resolution: this.CURRENT_PHONE.resolution, 
          Processor: this.CURRENT_PHONE.processor,
          RAM: this.CURRENT_PHONE.RAM 
        }
      },
      itemTechProperties() {
        return {
          Screen: this.CURRENT_PHONE.screen ,
          Resolution: this.CURRENT_PHONE.resolution ,
          Processor: this.CURRENT_PHONE.processor ,
          RAM: this.CURRENT_PHONE.RAM ,
          'Built in memory': this.CURRENT_PHONE.capacity ,
          Camera: this.CURRENT_PHONE.camera ,
          Zoom: this.CURRENT_PHONE.zoom ,
          Cell: this.CURRENT_PHONE.cell,
        }
      },
      avaibleImages() {
        const color = this.CURRENT_PHONE.color;
        return this.CURRENT_PHONE.avaibleImages[color];
      }
    },
    
    mounted() {
      this.GET_CURRENT_PHONE(this.$route.params.id)
    },
    updated() {
      if (this.$route.params) {
        window.scrollTo(0, 0);
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/mixins.scss';
@import '@/styles/vars/vars.scss';

.item-card {
  flex: 1;
  margin: 0 auto;
  max-width: 1200px;

  &__carusel {
    margin-left: 16px;

    @include tablet {
      margin-left: 24px;
    }

    @include desktop {
      margin-left: 32px;
    }
  }
}

.phone-card {
  grid-template-rows: auto;
  margin: 0 16px;

  @include tablet {
    margin: 0 24px;
  }

  @include desktop {
    margin: 0 32px;
  }

  &__title {
    color: $white;

    @include mobile {
      font-weight: 800;
      font-size: 22px;
      line-height: 140%;
      margin-bottom: 32px;
    }

    @include tablet {
      font-size: 32px;
      line-height: 42px;
    }
  }

  &__main-image-box {
    max-height: 288px;

    @include mobile {
      grid-row: 2/4;
      margin-bottom: 16px;
    }

    @include desktop {
      max-height: 464px;
      margin-bottom: 80px;
    }
  }

  &__main-image {
    width: 100%;
    max-height: 288px;
    object-fit: contain;
    object-position: center;

    @include desktop {
      max-height: 464px;
    }
  }

  &__other-photo-box {
    margin: 0 auto 40px;
    display: flex;
    gap: 8px;

    @include tablet {
      flex-direction: column;
    }

    @include desktop {
      gap: 16px;
    }
  }

  &__about {
    margin-bottom: 24px;
  }

  &__technical {
    &-title {
      color: $white;
      display: block;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      padding-bottom: 16px;
      margin-bottom: 30px;
      border-bottom: 1px solid $secondary;

      @include tablet {
        font-size: 22px;
        line-height: 32px;
      }
    }
  }
}

.short-info {
  position: relative;

  &__phone-id{
    position: absolute;
    color: $secondary;
    right: 0;
    top: 0;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: right;

    @include desktop {
      right: -200px;
    }
  }

  &__colors {
    padding-bottom: 24px;
    border-bottom: 1px solid $secondary;
    margin-bottom: 24px;
  }

  &__title {
    color: $secondary;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 8px;
  }

  &__capacity {
    padding-bottom: 24px;
    border-bottom: 1px solid $secondary;
    margin-bottom: 32px;
  }

  &__price-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin-bottom: 16px;

    gap: 8px;
  }

  &__buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px;
    margin-bottom: 32px;
  }

  &__add-button {
    height: 40px;
    cursor: pointer;
    flex-grow: 1;

    font-weight: 700;
    font-size: 14px;
    line-height: 21px;

    text-align: center;

    color: #F1F2F9;

    transition: background-color 0.3s;
    background-color: #905BFF;

    border: 0;
    padding: 0;

    &--is-selected {
      background-color: #323542;
    }

    &:hover {
      background-color: #A378FF;
    }
  }

  &__like-button {
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: #323542;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('@/images/Like.svg');

    transition: background-color 0.3s;

    border: 0;
    padding: 0;

    &--is-selected {
      border: 1px solid #3B3E4A;
      background-color:red;
      background-image: url('@/images/Like.svg');
    }

    &:hover {
      background-color: #4A4D58;
    }
  }

  &__properties {
    margin-bottom: 56px;
  }
}
</style>