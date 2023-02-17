<template>
    <section class="productsSlider">
      <div class="productsSlider__wrap">
        <!-- {isWide && -->
        <button
          v-if="isWide"
          type="button"
          class="productsSlider__btn"
          @click="prevSlide"
        >
          <img :src="leftArrow" alt="btn" />
        </button>

        <div class="productsSlider__container">
          <!-- {sliderData.map((slide, index: number) => {
            return ( -->
              <img
                v-for="(slide,index) in sliderData"
                :key="slide.id"
                :src="isWide ? slide.image : slide.imageMobile"
                alt="slide"
                :class="['productsSlider__img',{'productsSlider__img--act': index === currentSlide }]"
            />
        </div>

        <!-- {isWide &&  -->
        <button
          v-if="isWide"
          type="button"
          class="productsSlider__btn"
          @click="nextSlide"
        >
          <img :src="rightArrow" alt="btn" />
        </button>
      </div>

      <div class="productsSlider__indicators">
        <button
          aria-label="Mute volume"
          :class="[ 'productsSlider__indicator',{'productsSlider__indicator--active': currentSlide === 0 }]"
          type="button"
          @click="currentSlide=0"
        ></button>

        <button
          aria-label="Mute volume"
          :class="['productsSlider__indicator',{'productsSlider__indicator--active': currentSlide === 1 }]"
         
          type="button"
          @click="currentSlide = 1"
        ></button>

        <button
          aria-label="Mute volume"
          :class="['productsSlider__indicator',{'productsSlider__indicator--active': currentSlide === 2}]"
          type="button"
          @click="currentSlide = 2"
        ></button>
      </div>
    </section>
</template>
<script>
import leftArrow from "@/images/LeftArrow.svg";
import rightArrow from "@/images/RightArrowPag.svg";
import banner1 from "@/images/Banner1.png";
import banner2 from "@/images/Banner2.png";
import banner3 from "@/images/Banner3.png";
import banner4 from "@/images/baner3.jpg";
import banner5 from "@/images/baner4.jpg";
import banner6 from "@/images/baner6.jpg";
// import useWindowDimensions from "@/utils/customHooks/useWindowDimensions.js";

export default {
    data() {
        return {
            sliderData: [
                {
                    image: banner1,
                    imageMobile: banner4,
                    id: 1,
                },
                {
                    image: banner2,
                    imageMobile: banner5,
                    id: 2,
                },
                {
                    image: banner3,
                    imageMobile: banner6,
                    id: 3,
                },
            ],
            currentSlide:0,
            leftArrow: leftArrow,
            rightArrow: rightArrow,
            // width: useWindowDimensions().width,
            sliderLength: 3,
            isWide: window.innerWidth > 640,
            isAutoScroll: true,
            intervalTime: 5000,
        }
    },
    computed: {
        // isWide() {
        //     return window.innerWidth > 640;
        // },
        // width() {
        //     return useWindowDimensions().width,
        // }
        // width() {
        //     console.log(useWindowDimensions().width)
        //    return useWindowDimensions().width
        //     return window.innerWidth
        // }
    },
    created() {
        addEventListener('resize', () => {
            this.isWide = innerWidth > 640
        })
    },
    methods: {
        prevSlide() {
            this.currentSlide === 0
                ? this.currentSlide = this.sliderLength-1
                :this.currentSlide--
        },
        nextSlide() {
            this.currentSlide === this.sliderLength - 1
                ? this.currentSlide = 0
                :this.currentSlide++
        },
        // auto() {
        //     slideInterval = setInterval(this.nextSlide, this.intervalTime)
        // }
        auto() {
            if(this.isAutoScroll)
            setInterval(this.nextSlide, this.intervalTime)
        }
    },
    mounted() {
       this.auto()
    },
    // watch:{
    //     isAutoScroll() {
    //         if (this.isAutoScroll) {
    //             this.auto();
    //         } 

    //         return () => clearInterval(slideInterval);
    //     }
    // }
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import "@/styles/mixins/mixins.scss";

.productsSlider {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__wrap {
    display: flex;
    width: 100%;
    gap: 16px;
    margin-bottom: 18px;
  }

  &__btn {
    height: 30vw;
    width: 32px;
    background-color: $surface-2;
    border: 1px solid $surface-2;
    transition: border-color 0.3s;

    @include desktop {
      height: 400px;
    }


    &:hover {
      border-color: $icons;
      background-color: $icons;

      cursor: pointer;
    }
  }

  &__container {
    position: relative;
    flex: 1;
    height: 320px;
    overflow: hidden;
    border: 1px solid $icons;

    @include tablet {
      height: 30vw;
    }

    @include desktop {
      height: 400px;
    }
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    transform: translateX(-50%);
    transition: all 0.5s ease;
    opacity: 0;

    &--act {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__indicators {
    display: flex;
    gap: 14px;
  }

  &__indicator {
    width: 14px;
    height: 4px;
    background-color: $elements;
    cursor: pointer;
    transition: box-shadow 0.3s;
    border: none;

    &:hover {
      box-shadow: 0 0 8px grey;
    }

    &--active {
      background-color: $white;
    }
  }
}
</style>