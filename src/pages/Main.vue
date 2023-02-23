<template>
    <div class="homepage grid grid-mobile grid-tablet grid-desktop">
      <h1 class="homepage__title grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-17">
        Welcome to Nice Gadgets store!
      </h1>
      <div class="homepage__slider grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25">
        <TheSlider/>
      </div>

      <div class="homepage__carusel grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25">
        <ProductsCarusel 
          orderType="year"
          title="Brand new models"
        />
      </div>

      <div class="homepage__categories grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25">
        <ProductsCategories
          :phonesCount="PHONES.length"
          :tabletCount="0"
          :accessoriesCount="0"
        />
      </div>

      <div class="homepage__carusel grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-25">
        <ProductsCarusel 
          orderType="price"
          title="Hot prices"
        />
      </div>
    </div>
</template>
<script>
import ProductsCategories from "@/components/ProductsCategories/ProductsCategories.vue";
import ProductsCarusel from "@/components/ProductsCarusel/ProductsCarusel.vue";
import TheSlider from "@/components/TheSlider/TheSlider.vue";

import { mapGetters,mapActions } from "vuex";

export default {
  components: {
   ProductsCategories,
   ProductsCarusel,
   TheSlider
  },

  methods: {
    ...mapActions({GET_PHONES_FROM_API:'phones/GET_PHONES_FROM_API'})
  },

  computed: {
    ...mapGetters({PHONES:'phones/PHONES'})
  },

  mounted() {
    this.GET_PHONES_FROM_API()
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import '@/styles/mixins/_mixins.scss';

.homepage {
  flex: 1;
  margin: 0 auto;

  &__title {
    color: $white;
    margin: 0 16px 56px;

    @include tablet {
      margin: 0 24px 56px;
    }

    @include desktop {
      margin: 0 0 56px;
    }
  }

  &__carusel {
    margin-left: 16px;

    @include tablet {
      margin-left: 24px;
    }

    @include desktop {
      margin-left: 0;
    }
  }

  &__categories {
    margin: 0 16px;

    @include tablet {
      margin: 0 24px;
    }

    @include desktop {
      margin: 0;
    }
  }

  &__slider {
    margin: 0 16px;

    @include tablet {
      margin: 0 24px;
    }

    @include desktop {
      margin: 0;
    }
  }
}
</style>