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
    mounted() {
        console.log(this.imageLink, this.altName)
    }
}
</script>
<style></style>