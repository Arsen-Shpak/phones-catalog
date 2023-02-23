<template>

     <div class='
      container
      grid
      grid-mobile
      grid-tablet
      grid-desktop'
    >
      <section class="
        cart
        grid-mobile-1-5
        grid-tablet-1-13
        grid-desktop-1-25"
      >
        <BackButton />

        <h1 class='
          cart__title
          grid-mobile-1-5
          grid-tablet-1-13
          grid-desktop-1-25'
        >
          Cart
        </h1>
      
        <div class="
          cart__container
          grid-mobile-1-5
          grid-tablet-1-13
          grid-desktop-1-25
          grid
          grid-mobile
          grid-tablet
          grid-desktop"
        >
          <div 
            v-if ="CardList.length > 0" 
            class='grid-mobile-1-5 grid-tablet-2-12 grid-desktop-1-17'
          >
            <ItemInCart  
              v-for="(good,index) in CardList" 
              :key="good.itemId" 
              :good="good"
              @deleteFromCart =handlerDeleteFromCart(good)
              @removeCount = removeCount(index)
              @addCount=addCount(index)
            />
          </div>

          <div  
            v-if="CardList.length === 0 && !OrderAccepted " 
            class='cart__empty-box grid-mobile-1-5
              grid-tablet-1-13
              grid-desktop-1-25'
          >
            No products in the cart
          </div>

          <div 
            v-if="OrderAccepted" 
            class='grid grid-mobile grid-tablet grid-desktop'
          >
            <div 
              class="
              cart__bill bill grid-mobile-1-5
              grid-tablet-4-10
              grid-desktop-8-17"
            >
              <div class="bill__total-price">
                The order is successful
              </div>

              <div class='bill__items'>
                Order № {{ Math.random(100)*100}}      
              </div>

              <PrimaryButton
                title='Go home'
                @primaryButton="acceptOrder"
              />
            </div>
          </div>
        </div>
      
        <div 
          v-if ="CardList.length > 0" 
          :class="'cart__bill grid-mobile-1-5 grid-tablet-4-10 grid-desktop-17-25 bill'"
        >
            <div class='bill__total-price'>
                {{totalPrice}}$
            </div>
            <div class='bill__items'>
                Total for {{totalItems}} items
            </div>

            <div class='bill__line'></div>
            <div class='bill__buttons-box'>
              <PrimaryButton
                  title='Checkout'
                  @primaryButton="checkout"
                />
            </div>  
        </div>
      </section>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import ItemInCart from '@/components/ItemInCart/ItemInCart.vue';
import BackButton from '@/components/BackButton/BackButton.vue';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton.vue';

export default {
  components: {ItemInCart,BackButton,PrimaryButton},
  
  methods: {
    ...mapMutations({
      MINUS_CARDLIST: 'cart/MINUS_CARDLIST',
      ADD_COUNT: 'cart/ADD_COUNT',
      REMOVE_COUNT: 'cart/REMOVE_COUNT',
      ORDER_ACCEPT: 'cart/ORDER_ACCEPT',
    }),
    
    handlerDeleteFromCart(good) {
      this.MINUS_CARDLIST(good);
    },
    removeCount(index) {
      this.REMOVE_COUNT(index)
    },
    addCount(index) {
      this.ADD_COUNT(index)
    },
    checkout() {
      this.ORDER_ACCEPT()
    },
    acceptOrder() {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({ CardList: 'cart/CardList',OrderAccepted:'cart/OrderAccepted' }),
    totalPrice() {
      return this.CardList.reduce((acc, item) => {
        acc += item.count * item.price;
        return acc;
      },0)
    },
    totalItems() {
      return this.CardList.reduce((acc, item) => {
        acc += +item.count;
        return acc;
      },0)
    }
  },
}
</script>

<style lang="scss" scoped>

@import '@/styles/mixins/mixins';
@import '@/styles/vars/vars.scss';
@import '@/styles/grid-templates/grid-templates.scss';
.container {
  flex: 1;

  @include desktop {
    margin: 0 auto;
  }
}

.cart {
  padding: 0 16px;

  &__container {
    justify-self: center;

    @include mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 0;
    }

    @include tablet {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    @include desktop {
      align-items: flex-start;
    }
  }

  &__title {
    font-weight: 800;

    @include mobile {
      font-size: 32px;
      line-height: 41px;
    }

    @include tablet {
      font-size: 48px;
      line-height: 56px;
    }

    @include desktop {
      font-size: 48px;
      line-height: 56px;
    }

    letter-spacing: -0.01em;

    margin: 0 0 32px;

    color: $white;
  }

  &__empty-box {
    width: 100%;
    color: $white;
    font-size: 24px;
    letter-spacing: -0.01em;
  }
}

.product-cart{
  color: $white;

  display: flex;
  flex-direction: row;

  gap: 24px;

  justify-content: flex-start;
  align-items: center;

  @include mobile {
    justify-content: space-between;

    padding: 16px;

    gap: 24px 0;

    flex-wrap: wrap;
  }
  
  padding: 24px;

  
  background-color: $surface-1;

  margin-bottom: 16px;

  &__delete {
    cursor: pointer;

    background-image: url(@/images/Cross.svg);
    background-repeat: no-repeat;
    background-position: center;

    width: 16px;
    height: 16px;

    &--selected {
      border: 1px solid $accent;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__image-box {
    width: 80px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    color: $white;

    @include mobile {
      width: 128px;
    }

    @include tablet {
      width: 180px;
    }

    @include desktop {
      width: 340px;
    }

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }

  &__price {
    width: 80px;

    font-weight: 800;
    font-size: 22px;
    line-height: 140%;

    text-align: right;
  }
}

.counter {
  display: flex;
  gap: 0px;

  &__minus {
    cursor: pointer;

    background-color: transparent;

    background-image: url(@/images/Minus.svg);
    background-repeat: no-repeat;
    background-position: center;

    background-color: transparent;

    border: 1px solid $surface-2;

    width: 32px;
    height: 32px;

    transition: opacity .3s, background-color .3s;

    &:hover {
      background-color: $surface-2;
    }

    &--disable {
      cursor: default;

      opacity: 50%;

      &:hover {
        background-color: transparent;
      }
    }
  }

  &__value {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    text-align: center;
    color: $white;
  }

  &__plus {
    cursor: pointer;

    background-color: transparent;

    background-image: url(@/images/Cross.svg);
    background-repeat: no-repeat;
    background-position: center;

    border: 1px solid $elements;

    width: 32px;
    height: 32px;

    transition: opacity .3s, background-color .3s;

    &:hover {
      background-color: $surface-2;
    }

    &--disable {
      cursor: default;

      background-color: transparent;

      opacity: 50%;

      &:hover {
        background-color: transparent;
      }
    }
  }
}

.bill {
  width: 100%;
  height: min-content;

  padding: 24px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  color: $white;
  
  border: 1px solid $elements;  
  
  @include mobile {
    margin-bottom: 40px;
  }

  @include tablet {
    margin-bottom: 60px;
  }

  @include desktop {
    margin-bottom: 80px;
  }

  &--operation {
    position: relative;
    border: 1px solid;

    animation: bill-success 1s linear 0s infinite;
  }

  &__total-price {
    font-weight: 800;
    font-size: 32px;
    line-height: 41px;

    text-align: center;
  }

  &__items {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    color: $secondary;

    margin-bottom: 24px;
  }

  &__line {
    width: 100%;
    border-bottom: 1px solid $elements;

    margin-bottom: 24px;
  }

  &__buttons-box {
    width: 100%;
    display: flex;

    gap: 16px;
  }

  &__clear-button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;
    height: 40px;

    background-color: $surface-1;
    font-size: 14px;
    border: 1px solid $elements;

    transition: background-color .3s;

    &:hover {
      background-color: $surface-2;
    }
  }
}

@keyframes bill-success {
  0%{
    border-image: linear-gradient(
      0deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  10%{
    border-image: linear-gradient(
      36deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  20%{
    border-image: linear-gradient(
      72deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  30%{
    border-image: linear-gradient(
      108deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  40%{
    border-image: linear-gradient(
      144deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  50%{
    border-image: linear-gradient(
      180deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  60%{
    border-image: linear-gradient(
      216deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  70%{
    border-image: linear-gradient(
      252deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  80%{
    border-image: linear-gradient(
      288deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  90%{
    border-image: linear-gradient(
      324deg,
    rgba(39,174,96,1) 0%,
    rgba(144,91,255,1) 100%) 1;
  
  }
  100%{
    border-image: linear-gradient(
      360deg,
    $green 0%,
    $accent 100%) 1;
  }
}
</style>
