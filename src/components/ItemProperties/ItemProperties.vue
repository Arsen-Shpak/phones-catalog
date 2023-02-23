<template>
  <div>
    <div
      v-for="([key, value]) in properties"
      class="item-properties__line"
      :key="key"
    >
      <div :class="keyClass">
        {{key}}
      </div>
      <div :class="valueClass">
        {{value}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    propertiesOfItem: {
        type:Object
    },
    additionalClasses: {
        type:Array
    }
  },
  
  computed: {
    properties() {
        return Object.entries(this.propertiesOfItem)
    },
    keyClass() {
      return this.additionalClasses?.length
        ? `item-properties__name ${ this.additionalClasses[0] }`
        : 'item-properties__name';
    },
    valueClass() {
      return this.additionalClasses?.length
        ? `item-properties__value ${  this.additionalClasses[1] }`
        : 'item-properties__value';
    }
  }   
}
</script>
<style lang="scss" scoped>

@import '@/styles/mixins/mixins.scss';
@import '@/styles/vars/vars.scss';

.item-properties {
  &__line{
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__name {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: $secondary;

    &--font-size {
      @include tablet {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }

  &__value {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: $white;

    &--font-size {
      @include tablet {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}
</style>