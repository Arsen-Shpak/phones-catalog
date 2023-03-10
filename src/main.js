import Vue from "vue";
import App from "./App.vue";
import VueCarousel from 'vue-carousel';
import store from "./store";
import router from "./router";
import '@/styles/styles/styles.scss';
  new Vue({
    render: (h) => h(App),
    store,
    router,
    VueCarousel,
  }).$mount("#app");
