<template>
  <div id='app'>
    <TheHead/>
    <router-view :key='$route.fullPath'/>
    <TheFooter/>
  </div>
</template>
<script>
import TheHead from '@/components/Header/TheHead.vue';
import TheFooter from "@/components/TheFooter/TheFooter.vue";

export default {
  components: {
    TheHead,TheFooter
  }
}
</script>
<style lang="scss">
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
</style>
