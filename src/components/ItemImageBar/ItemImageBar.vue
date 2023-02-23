<template>  
  <div>
    <div
      v-for="(imageLink, i) in images"
      :key="i"
      :class="[
        'single-photo-box',
        // {
        //     'single-photo-box--border-white':i === currentImage,
        //     'single-photo-box--border-grey':i !== currentImage,
        // }
      ]"
      
      @click="handleImageChange(imageLink)"
    >
      <img
        :src="require('@/images/' + imageLink)"
        :alt="altName"
        class="single-photo-box__preview-image"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: { type: Array },
    currentImage: { type: String },
    altName:{type:String}  
  },
  
  methods: {
    handleImageChange(number) {
        this.$emit("changeImage",number)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixins/mixins.scss';
@import '@/styles/vars/vars.scss';

.single-photo-box {
  width: 50px;
  height: 50px;
  padding: 4px;
  cursor: pointer;

  @include desktop {
    width: 80px;
    height: 80px;
  }

  &--border-white{
    border: 1px solid $white;
  }

  &--border-grey{
    border: 1px solid $secondary;
  }

  &__preview-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>