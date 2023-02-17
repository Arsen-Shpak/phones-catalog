<template>
  <div>
     <header id="header" class="header">
        <section class="header__left-mobile">
          <router-link to="/">
            <img class="header__logo" :src="Logo" alt="logo" />
          </router-link>
          <div
            @click="openBurger"
            class="header__link-cross"
          >
            <div class="header__link-wrap">
                <img class="header__link-img" :src="Burger" alt="burger" />

              <!-- {/* {isOpen ? (
                <img class="header__link-img" :src={Cross} alt="burger" />
              ) : (
                <img class="header__link-img" :src={Burger} alt="burger" />
              )} */} -->
            </div>
          </div>
          <!-- {/* 
          <router-link to="menu" class="header__link-cross">
            <div class="header__link-wrap">
              <a href="*">
              <img class="header__link-img" src={Burger} alt="burger" />
              </a>
            </div>
          </router-link>
           */} -->
        </section>
        <section class="header__left">
          <router-link to="/">
            <img class="header__logo" :src="Logo" alt="logo" />
          </router-link>

          <nav class="header__nav">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <router-link to="/" class="header__nav-link">
                  home
                </router-link>
              </li>

              <li class="header__nav-item">
                <router-link to="/phones" class="header__nav-link">
                  phones
                </router-link>
              </li>

              <li class="header__nav-item">
                <router-link to="/tablets" class="header__nav-link">
                  tablets
                </router-link>
              </li>

              <li class="header__nav-item">
                <router-link to="/accessories" class="header__nav-link">
                  accessories
                </router-link>
              </li>
            </ul>
          </nav>
        </section>

        <section class="header__right">
          <router-link to="/favourites" class="header__link">
            <div class="header__link-wrap">
              <img :src="Like" class="header__link-img" alt="btn-like" />
                <div v-if="ItemsInfavourites>0" class="header__link-img-count">{{ItemsInfavourites}}</div>
            </div>
          </router-link>

          <router-link to="/cart" class="header__link">
            <div class="header__link-wrap">
              <img :src="Cart" class="header__link-img" alt="link-img" />
                <div v-if="ItemsInCart>0" class="header__link-img-count">{{ItemsInCart}}</div>
            </div>
          </router-link>
        </section>
      </header>
        <aside v-if="isOpen" class="menu" id="menu">
          <section class="menu__top">
            <router-link
              to="/"
              @click="removeMenu"
            >
              <img class="menu__logo" :src="Logo" alt="logo" />
            </router-link>
            <router-link to="/">
              <div
                class="menu__link-cross"
                @click="removeMenu"
              >
                <div class="menu__link-wrap">
                  <img class="menu__link-img" :src="Cross" alt="burger" />
                </div>
              </div>
            </router-link>
          </section>

          <nav class="menu__nav">
            <ul class="menu__nav-list">
              <li class="menu__nav-item">
                <router-link
                  to="/"
                  class="menu__nav-link"
                  @click= "removeMenu"
                >
                  home
                </router-link>
              </li>

              <li class="menu__nav-item">
                <router-link
                  to="/phones"
                  class="menu__nav-link"
                  @click= "removeMenu"
                >
                  phones
                </router-link>
              </li>

              <li class="menu__nav-item">
                <router-link
                  to="/tablets"
                  class="menu__nav-link"
                  @click= "removeMenu"
                >
                  tablets
                </router-link>
              </li>

              <li class="menu__nav-item">
                <router-link
                  to="/accessories"
                  class="menu__nav-link"
                  @click= "removeMenu"
                >
                  accessories
                </router-link>
              </li>
            </ul>
          </nav>

          <section class="menu__bottom">
            <router-link
              to="/favourites"
              class="menu__link"
              @click= "removeMenu"
            >
              <div class="menu__link-wrap">
                <img :src="Like" class="menu__link-img" alt="btn-like" />
                  <div v-if="ItemsInfavourites > 0" class="menu__link-img-count">{{ItemsInfavourites}}</div>
              </div>
            </router-link>

            <router-link
              to="/cart"
              class="menu__link"
              @click= "removeMenu"
            >
              <div class="menu__link-wrap">
                <img :src="Cart" class="menu__link-img" alt="link-img" />
                  <div v-if="ItemsInCart > 0" class="menu__link-img-count">{{ItemsInCart}}</div>
              </div>
            </router-link>
          </section>
        </aside>
      <!-- )} -->
  </div>
</template>
<script>
import Logo from '@/images/Logo.png';
import Burger from '@/images/Burger.svg';
import Cross from '@/images/Cross.svg';
import Like from '@/images/Like.svg';
import Cart from '@/images/Cart.svg';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            // ItemsInfavourites: 3,
            // itemsInCart: 4,
            isOpen: false,
            Logo: Logo,
            Burger:Burger,
            Cross:Cross,
            Like:Like,
            Cart:Cart,
        }
  },
    name:'header',
  methods: {
        openBurger() {
            this.isOpen = !this.isOpen;
        },
        removeMenu() {
            this.isOpen = false;
            
        }
  },
  computed: {
      ...mapGetters({ItemsInCart:'cart/ItemsInCart',ItemsInfavourites:'favourites/ItemsInfavourites'}),
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixins/_mixins.scss';
.header {
  top: 0;
  display: flex;
  justify-content: space-between;
  background: #0f1121;
  box-shadow: 0 1px 0 #323542;
  margin-bottom: 40px;

  &__left {

    @include mobile {
      display: none;
    }

    @include tablet {
      display: flex;
      align-items: center;
      margin-left: 24px;
    }
    

    &-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 16px;
      // box-shadow: 0 1px 0 #323542;
      width: 100%;
      @include tablet {
        display: none;
      }
    }
  }

  &__logo {

    width: 64px;
    height: 20px;

    @include tablet {
      width: 80px;
      height: 26px;
      background-repeat: no-repeat;
    }
  }

  &__nav {
    // margin-left: 32px;

    @include mobile {
      display: none;
    }

    @include tablet {
        margin-left: 32px;
        display: block;
    }

    @include desktop {
      margin-left: 48px;
    }
  }

  &__nav-list {
    display: flex;
    list-style: none;

    @include tablet {
      gap: 32px;
    }

    @include desktop {
      gap: 64px;
    }
  }

  &__nav-item {
    position: relative;
    height: max-content;
    line-height: 64px;
  }

  &__nav-link {
    font-weight: 800;
    font-size: 12px;
    line-height: 11px;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #75767f;

    transition-duration: 0.5s;
    transition-property: color;

    &:hover {
      color: #f1f2f9;
    }

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 100%;
      background-color: #f1f2f9;
      left: 0;
      bottom: 0;
      opacity: 0;

      transition: opacity 0.3s;
    }

    &:hover::after {
      opacity: 100;
    }
  }

  &__link {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 0 0 #3b3e4a;
    width: 64px;

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 100%;
      background-color: #f1f2f9;
      left: 0;
      bottom: 0;
      opacity: 0;

      transition: opacity 0.3s;
    }

    &:hover::after {
      opacity: 100;
    }

      &-cross {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        box-shadow: -1px 0 0 #3b3e4a;
        width: 48px;
        height: 48px;
        cursor: pointer;
      }
  }

  &__link-wrap {
    position: relative;
  }

  &__link-img {
    transition: transform 0.3s;
  }

  &__link-img-count {
    position: absolute;
    top: -6px;
    left: 10px;
    height: 14px;
    width: 14px;
    background-color: red;
    border-radius: 50%;
    color: #f1f2f9;
    font-weight: 600;
    font-size: 9px;
    line-height: 14px;
    text-align: center;
  }

  &__link:hover .header__link-img {
    transform: scale(1.2);
  }

  &__right {
    // display: flex;

    @include mobile {
      display: none;
    }
    @include tablet {
        display: flex;
    }
  }
}

.menu {
  background: #0F1121;
  height: 100vh;
  box-shadow: 0 1px 0 #323542;
  
  // position: relative;

  //стили для выдвижение бургера 
  position: fixed;
  // top: 49px;
  left: 0;
  right: 0;
  z-index: 1;
  // transform: translateX(-100%);  
  // transition: transform 0.3s;

  @include tablet {
    display: none;
  }

  &:target {
  transform: translateX(0);  

  }
  //стили для выдвижение бургера 

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-left: 16px;
    padding-left: 16px;
    box-shadow: 0 1px 0 #323542;

  }

  &__logo {
    width: 64px;
    height: 20px;
    background-repeat: no-repeat;
  }

  // &__cross {
  //   width: 9px;
  //   height: 9px;
  //   background-repeat: no-repeat;
  // }

  // &__nav {
  //   margin-bottom: 284px;
  // }

  &__nav-list {
    display: flex;
    flex-direction: column;
    // gap: 32px;
    list-style: none;
    justify-content: center;
    align-items: center;
  }

  &__nav-item {
    position: relative;
    height: max-content;
    line-height: 64px;
  }

  &__nav-link {
    font-weight: 800;
    font-size: 12px;
    line-height: 11px;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #75767f;

    transition-duration: 0.5s;
    transition-property: color;

    &:hover {
      color: #f1f2f9;
    }

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 100%;
      background-color: #f1f2f9;
      left: 0;
      bottom: 0;
      opacity: 0;

      transition: opacity 0.3s;
    }

    &:hover::after {
      opacity: 100;
    }
  }

  &__link {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 0 0 #3b3e4a;
    width: 50%;
    height: 64px;

    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 100%;
      background-color: #f1f2f9;
      left: 0;
      // bottom: 0;
      bottom: 0;
      opacity: 0;

      transition: opacity 0.3s;
    }

    &:hover::after {
      opacity: 100;
    }

    &-cross {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      box-shadow: -1px 0 0 #3b3e4a;
      width: 48px;
      height: 48px;
    }
  }

  &__link-wrap {
    position: relative;
  }

  &__link-img {

    transition: transform 0.3s;
  }

  &__link:hover .menu__link-img {
    transform: scale(1.2);
  }

  &__link-img-count {
    position: absolute;
    top: -6px;
    left: 10px;
    height: 14px;
    width: 14px;
    background-color: red;
    border-radius: 50%;
    color: #f1f2f9;
    font-weight: 600;
    font-size: 9px;
    line-height: 14px;
    text-align: center;
  }

  &__link:hover .header__link-img {
    transform: scale(1.2);
  }

  &__bottom {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 0 1px #323542;
    border: 1px solid #3B3E4A;
  }
}
</style>

<!-- #75767f: #75767f;
$icons: #4a4d58;
#3b3e4a: #3b3e4a;
#323542: #323542;
$surface-1: #161827;
$bc-color: #0f1121;
#f1f2f9: #f1f2f9;
$accent: #905bff;
$hover-accent: #a378ff;
$green: #27ae60;
$red: #eb5757; -->