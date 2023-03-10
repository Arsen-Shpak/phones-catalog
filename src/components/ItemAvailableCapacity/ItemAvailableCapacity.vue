<template>
  <div>
    <h4 class='available-capacity__title'>
      Select capacity
    </h4>

    <div class='available-capacity__options'>
      <div
        v-for="capacity in capacityAvailable"
        :class="{
          'available-capacity__box--current': capacity === currentCapacity,
          'available-capacity__box--option': capacity !== currentCapacity
        }"
        :key="capacity"
        @click="handleCapacityChange (capacity)"
      >
        {{capacity}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    capacityAvailable: {
      type:Array
    },
    currentCapacity: {
      type:String
    }
  },

  emits: ["changeCapacity"],
   
  methods: {
    handleCapacityChange (newCapacity) {
      this.$emit ("changeCapacity",newCapacity)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";

.available-capacity {
  &__title {
    color: $white;
  }

  &__options {
    display: flex;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
  }

  &__box--current {
    background-color: $white;
    color: $bc-color;
    padding: 0 8px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
  }

  &__box--option {
    border: 1px solid $secondary;
    color: $white;
    padding: 0 8px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
  }
}
</style>