<template>

     <footer class="footer">
        <div class="footer__logo">
          <a href="*">
            <!-- {/* <img
              src={niceGadgets}
              alt="img"
              class="footer__logo-img--logo"
            ></img>
            <img src={ok} alt="img" class="footer__logo-img--ok" /> */} -->
            <img :src="Logo" alt="img" class="footer__logo" />
          </a>
        </div>
        <nav class="footer__nav">
          <!-- {/* <ul class="nav__list"> */}
          {/* <li class="nav__item"> */} -->
          <a href="*" class="footer__nav-link">
            Github
          </a>
          
          <router-link to="/contributors" class="footer__nav-link">
            Contributors
          </router-link>
          
          <a href="*" class="footer__nav-link">
            rights
          </a>
          <!-- {/* </li> */}
          {/* </ul> */} -->
        </nav>
        <div class="footer__back">
          <p class="footer__back-article">Back to top</p>
          <a class="footer__back-link" href="*">
            <!-- {/* <button class="nav__button"> */} -->
            &gt;
            <!-- {/* <img src="" alt="img" class="footer__back-img"></img> */}
            {/* </button> */} -->
          </a>
        </div>
      </footer>
</template>
<script>
import Logo from '@/images/Logo.png';

export default {
    data() {
        return {
            Logo: Logo,
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixins/_mixins.scss';

* {
    box-sizing: border-box;
}

.footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;
    padding: 34px 16px 32px;
    // border: red 2px solid;
    background-color: #0F1121;
    // height: 257px;
    border-top: 1px solid #3B3E4A;

    @include tablet {
        flex-direction: row;
        align-items: center;
        padding: 34px 32px 32px;
    }

    &__logo {
        margin-bottom: 32px;
        position: relative;
        height: 30px;

        @include tablet {
            margin: 0;
        }

        &-img--ok {
            position: absolute;
            bottom: 15px;
            left: 40px;
        }
    }

    &__nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include mobile {
            margin-bottom: 32px;
        }
        
        @include tablet {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 0;

        }

        &-link {
            list-style-type: none;
            text-transform: uppercase;

            // width: 48px;
            // height: 11px;
            font-family: 'Mont';
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 11px;
            letter-spacing: 0.04em;
            // text-transform: uppercase;
            color: #F1F2F9;
            text-decoration: none;
            margin-bottom: 16px;

            @include tablet {
                margin-right: 13px;
                margin-bottom: 0;
            }

            @include desktop {
                margin-right: 106px;
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

        &-article {
            font-family: 'Mont';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            text-align: right;
            color: #75767F;
            margin-right: 16px;
        }

        &-link {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #F1F2F9;
            height: 32px;
            width: 32px;
            background-color:#323542;
            text-decoration: none;
            transform: rotate(-90deg);
        }

        &-link:hover {
            background-color: #4A4D58;
;
        }
    }
}
</style>