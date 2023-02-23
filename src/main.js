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


    // "avaibleImages":{
    //       "black":["phone3.svg", "List3Phone1.jpg", "List3Phone2.jpg"],
    //       "green":["greenPhone.jpg","greenPhone.jpg","greenPhone.jpg"],
    //       "yellow":["yellowPhone.jpg","yellowPhone.jpg","yellowPhone.jpg"],
    //       "white":["whitePhone.jpg","whitePhone.jpg","whitePhone.jpg"],
    //       "violet":["violetPhone.jpg","violetPhone.jpg","violetPhone.jpg"],
    //       "red":["redPhone.jpg","redPhone.jpg","redPhone.jpg"]
    //   }