<template>
  <footer class='footer'>
    <div class='footer__wrapper'>
      <div class='footer__logo'>
        <router-link to='/'>
          <img 
            :src="Logo" 
            alt='img' 
          />
        </router-link>
      </div>
      <nav class='footer__nav'>
        <a
          href='/'
          target='blanc'
          class='footer__nav-link'
        >
          Github FE
        </a>
        <router-link 
          to='/contributors' 
          class='footer__nav-link'
        >
          Contributors
        </router-link>
        <a 
          href='/' 
          class='footer__nav-link' 
          target='blanc'
        >
          Github BE
        </a>
      </nav>

      <div
        class='footer__back'
        @click='handleScrollToTop'
      >
        <p class='footer__back-article'>
          Back to top
        </p>
        <div
          class='footer__back-link'
          id='back'
        >
          <img 
            class='footer__back-img' 
            :src="vector" 
            alt='img' 
          />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from "@/images/Logo.png";
import Vector from "@/images/Vector.svg";
export default {
  data () {
    return {
      Logo: Logo,
      vector:Vector
    }
  },
  methods: {
    handleScrollToTop () {
      window.scrollTo ({ top: 0, behavior: "smooth" });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import "@/styles/mixins/mixins.scss";

.footer {
  border-top: 1px solid $elements;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 34px 16px 32px;
    max-width:1200px;
    width: 100%;
    margin:0 auto;

    @include tablet {
      flex-direction: row;
      align-items: center;
      padding: 34px 32px 32px;
    }
  }

  &__logo {
    margin-bottom: 32px;
    position: relative;
    height: 30px;

    @include tablet {
      margin: 0;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 16px;

    @include tablet {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0;
    }

    &-link {
      display: block;
      padding: 16px 0;
      position: relative;
      list-style-type: none;
      text-transform: uppercase;
      width: fit-content;
      height: 100%;
      font-weight: 700;
      font-size: 12px;
      line-height: 21px;
      letter-spacing: 0.04em;
      color: $secondary;
      text-decoration: none;
      transition: color 0.5s;

      &:not(:last-child) {
        margin-right: 16px;
      }
      &:hover {
        color: $white;
      }

      &::after {
        @include mobile {
          position: absolute;
          content: "";
          height: 2px;
          width: 100%;
          background-color: $white;
          left: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
      }

      &::before {
        @include tablet {
          position: absolute;
          content: "";
          height: 2px;
          width: 100%;
          background-color: $white;
          left: 0;
          top: -32px;
          opacity: 0;
          transition: opacity 0.3s;
        }
      }

      &:hover::after {
        opacity: 1;
        @include tablet {
          opacity: 0;
        }
      }

      &:hover::before {
        opacity: 0;
        @include tablet {
          opacity: 1;
        }
      }
    }

    &-link:last-child {
      margin-bottom: 0;

      @include desktop {
        margin-right: 0;
      }
    }
  }

  &__back {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover .footer__back-link{
      background-color: $icons;
    }

    &:hover .footer__back-article{
      color: $white;
    }

    &-article {
      font-family: "Mont";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      text-align: right;
      color: $secondary;
      margin-right: 16px;
      cursor: pointer;
    }

    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      height: 32px;
      width: 32px;
      background-color: $surface-2;
      border-color: transparent;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>