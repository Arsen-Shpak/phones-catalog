<template>
  <div>
    <h2 class="item-prices__current-price">
      ${{price}}
    </h2>

    <h2 class="item-prices__full-price">
      ${{fullPrice}}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    price: { type: String },
    fullPrice:{type:String}
  }
}
</script>
<style lang="scss" scoped>
  .item-prices {
    &__current-price {
      padding: 0px;
      margin: 0px;

      font-weight: 800;
      font-size: 32px;
      line-height: 41px;

      color: #F1F2F9;
    }

    &__full-price {
      padding: 0px;
      margin: 0px;

      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      text-decoration-line: line-through;

      color: #75767F;
    }
  }
</style>