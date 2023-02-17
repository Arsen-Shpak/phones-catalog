<template>
            <Carousel
                :minSwipeDistance="1"
                paginationColor="red"
                class="Carusel__list"
              >
                <Slide 
                  class="Сarusel__card" 
                  v-for="image in images" 
                  :key="image"
                  data-index="0"
                  data-name="MySlideName"
                  @slideclick="handleSlideClick"
                >
                  <MainImage
                    :imageLink="image"
                    :altName="CURRENT_PHONE.title"
                  />
                </Slide>
              </Carousel>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import MainImage from '../MainImage/MainImage.vue';
import { mapGetters } from 'vuex';
export default {
    components: { Carousel, Slide,MainImage },
    props: {
        images:{type:Array}
    },
    computed: {
        ...mapGetters({CURRENT_PHONE:"phones/CURRENT_PHONE"})
    }
}
</script>
<style lang="scss" scoped></style>