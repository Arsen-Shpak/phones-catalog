<template>
  <section class='Carusel grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25'>
    <div class='Carusel__top'>
      <h2 class='Carusel__title'>
        {{title}}
      </h2>

      <div class='Carusel__btns'>
        <button
          :class="[
            'Carusel__btn',
            {'Carusel__btn--off': start === 0}
          ]"
          type='button'
          @click="handlePrev"
          :disabled="start === 0"
        >
          <img
            :class="{ 'Carusel__img-off': start === 0 }"
            :src="LeftArrow"
            alt='btn'
          />
        </button>
        <button
          :class="[
            'Carusel__btn',
            {'Carusel__btn--off': end === this.PHONES.length-1}
          ]"
          type='button'
          @click="handleNext"
          :disabled="end === this.PHONES.length-1"
        >
          <img
            :class="{'Carusel__img-off': end === this.PHONES.length-1 }"
            :src="RightArrow"
            alt='btn'
          />
        </button>
      </div>
    </div>
    <div class='Carusel__wrap grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25'>
        <!-- ИМПОРТИРОВАННАЯ КАРУСЕЛЬ -->
      <Carousel 
        :minSwipeDistance="4"
        :paginationPadding="10"
        paginationColor='white'
        class='Carusel__list'
        :loop="true"
        :navigateTo="start"
        :perPage="step"
        :scrollPerPage="false"
        :paginationEnabled="false"
      >
        <Slide 
          class='Carusel__card' 
          v-for="phone in phonesForCarusel" 
          :key="phone.itemId"
        >
          <CardItem
            :phone="phone"
          />
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import CardItem from "../CardItem/CardItem.vue";
import LeftArrow from "@/images/LeftArrow.svg";
import RightArrowPag from "@/images/RightArrowPag.svg";
import { mapGetters } from "vuex";
export default {
  components: { CardItem, Carousel, Slide },

  props: {
    orderType:{},
    title:{type:String}
  },

  data () {
    return {
      LeftArrow:LeftArrow,
      RightArrow: RightArrowPag,
      start: 0,
      end:4,
      width:window.innerWidth,
    }
  },
    
  computed: {
    ...mapGetters ({ PHONES: "phones/PHONES" }),
    
    phonesForCarusel () {
      return [...this.PHONES].sort ( (goodA, goodB) => {
        switch  (this.orderType) {
          case "year": {
              if  (goodA.year && goodB.year) {
                return goodB.year - goodA.year;
              }
              return 0;
          }
          case "price": {
              if  (goodA.price && goodB.price) {
                return goodA.price - goodB.price;
              }
              return 0;
          }
          default:
          return 0;
        }
      })
    },
    step () {
      const start = 310;
      const usedWidth = this.width < 1200 ? this.width : 1200;
    
      return Math.round (usedWidth / start * 10) / 10;
    }
  },
  methods: {
    handleNext () {
      if  (this.start < this.PHONES.length-2) {
        this.start = this.start+1
      }
    },
    handlePrev () {
      if (this.start>0){
        this.start = this.start-1
      }
  },
  handleSlideClick (dataset) {
      console.log (dataset.index, dataset.name)
    }
  },
  created () {
    addEventListener ("resize",  () => {
      this.width = innerWidth
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import "@/styles/mixins/mixins";

.Carusel {
  max-width: 1136px;
  padding: 80px 0;
  margin: 0 auto;
  overflow: hidden;

  &__title {
    font-weight: 800;
    font-size: 22px;
    line-height: 31px;
    color: $white;
    margin-bottom: 24px;

    @include tablet {
      font-size: 32px;
      line-height: 41px;
    }
  }

  &__btns {
    display: flex;
    gap: 16px;
  }

  &__btn {
    width: 32px;
    height: 32px;
    background-color: $surface-2;
    border: 1px solid $elements;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      border-color: $icons;
      background-color: $icons;
    }

    &--off {
      &:hover {
        background-color: $surface-2;
        border: 1px solid $elements;
        cursor: default;
      }
    }
  }

  &__img-off {
    opacity: 0.3;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-right: 16px;

    @include tablet {
      margin-right: 24px;
    }

    @include desktop {
      margin-right: 32px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
  }

  &__wrap {
    width: calc(100vw - 32px);

    @include tablet {
      width: calc(100vw - 48px);
    }

    @include desktop {
      // width: 1200px;
      width: 1152px;
    }
  }

  &__card {
    margin-right: 16px !important;
    flex-basis:0;

    &:last-child {
      margin-right: 0 !important;
    }
  }
}
</style>