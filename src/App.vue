<template>
  <div id="app">
    <Head></Head>
    <router-view :key='$route.fullPath'/>
    <Foot></Foot>
  </div>
</template>
<script>
import Head from '@/components/Header/Head.vue';
// import Footer from '@/components/Footer/Footer.vue';
import Foot from "@/components/Footer/Foot.vue";

export default {
  components: {
    Head,Foot
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
// *{
//   margin:0;
//   padding:0;
//   box-sizing: border-box;
// }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
