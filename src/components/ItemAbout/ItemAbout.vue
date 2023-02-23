<template>
  <div>
     <h4 class="item-about__title">
      About
    </h4>
        <div 
            v-for="({title, text}) in description" 
            :key="title"
        >
          <h5 class="item-about__subtitle">
            {{title}}
          </h5>
              <p
                v-for="(paragraph, i) in text"
                :key="paragraph"
                :class="['item-about__text',
                  {'item-about__text--position-last': text.length - 1 === i}
                ]"
              >
                {{paragraph}}
              </p>
        </div>
  </div>
</template>
<script>
export default {
    props: {
        description: {
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>

@import '@/styles/mixins/mixins.scss';
@import '@/styles/vars/vars.scss';

.item-about {
  &__title {
    color: $white;
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    border-bottom: 1px solid $secondary;

    @include tablet {
      font-size: 22px;
      line-height: 32px;
    }
  }

  &__subtitle {
    color: $white;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;

    @include tablet {
      font-size: 20px;
      line-height: 26px;
    }
  }

  &__text {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #89939A;
    margin-bottom: 24px;

    &--position-last {
      margin-bottom: 32px;
    }
  }
}
</style>