<template>
  <div class='accessories'>
    <h1 class='accessories__title'>
      Section is under construction
    </h1>

    <router-link
      to='/'
      class='accessories__button'
    >
      Go Home
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/mixins";
@import "@/styles/vars/vars.scss";

.accessories {
  flex: 1;

  &__title {
    color: $white;
    text-align: center;
    margin-bottom: 40px;
  }

  &__button {
    margin: 0 auto;
    display: block;
    width: fit-content;
    height: 40px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #F1F2F9;
    transition: background-color 0.3s;
    background-color: #905BFF;
    border: 0;
    padding: 0 16px;

    &:hover {
      background-color: #A378FF;
    }
  }
}
</style>