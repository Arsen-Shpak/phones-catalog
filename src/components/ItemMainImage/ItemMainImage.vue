<template>
  <div
    class="phone-card__main-image-box"
  >
    <img
      :src="require('@/images/' + imageLink)"
      :alt="altName"
      class="phone-card__main-image"
    />
  </div>
</template>
<script>
export default {
  props: {
    imageLink: { type: String },
    altName:{type:String}
  },
  
}
</script>
<style>
  .phone-card__main-image-box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .phone-card__main-image{
    max-height:300px;
    max-width: 200px;
  }
  
</style>