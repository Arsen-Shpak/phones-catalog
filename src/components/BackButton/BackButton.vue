<template>
  <button 
    class='back-button' 
    @click="handleClick"
  >
    <div class='back-button__image'></div>
    <span class='back-button__title'>Back</span>
  </button>
</template>
<script>
export default {
  methods: {
      handleClick () {
        this.$router.go (-1)
      }
  }
}

</script>
<style lang="scss" scoped>
@import "@/styles/mixins/mixins";
@import "@/styles/vars/vars.scss";

.back-button {
  cursor: pointer;
  width: min-content;
  text-decoration: none;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;

  @include mobile {
    margin-bottom: 24px;
  }
  
  @include tablet {
    margin-bottom: 16px;
  }

  @include desktop {
    margin-bottom: 16px;
  }

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  background-color: transparent;
  color: $white;
  border: none;
  transition: color .3s;

  &__image{
    width: 16px;
    height: 16px;
    transition: background-image .3s;
    background-image: url(@/images/LeftArrow.svg);
    background-repeat: no-repeat;
    background-position: center;
  }

  &__title {
    display: inline-block;
  }

  &:hover {
    color: $accent;
  }

  &:hover &__image {
    background-image: url(@/images/LeftArrowColor.svg);
  }
}
</style>