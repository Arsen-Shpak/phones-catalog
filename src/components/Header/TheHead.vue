<template>
  <header class='header'>
    <div
      v-if="!isMobile"
      class='header__burger burger'
    >
      <HeaderMobile />
    </div>

    <div
      v-if="isMobile" 
      class='header__desktop navigation'
    >
      <HeaderDesktop />
    </div>
  </header>
</template>
<script>
import HeaderMobile from "@/components/Header/HeaderMobile/HeaderMobile.vue";
import HeaderDesktop from "@/components/Header/HeaderDesktop/HeaderDesktop.vue";
export default {
  components: { HeaderMobile, HeaderDesktop },
  
  data () {
    return {
      isMobile: window.innerWidth > 640
    }
  },
  
  created () {
    addEventListener ("resize",  () => {
      this.isMobile = innerWidth > 640;
    })
  },
  
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import "@/styles/grid-templates/grid-templates.scss";

.header {
  display: block;
}
</style>