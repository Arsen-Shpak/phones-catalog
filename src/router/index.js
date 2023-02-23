import Vue from "vue";
import Router from "vue-router";
import Main from "@/pages/Main.vue";
import Phones from "@/pages/Phones.vue";
import NotFound from "@/pages/NotFound.vue";
import Cart from "@/pages/Cart.vue";
import Favourites from "@/pages/Favourites.vue";
import Accessories from "@/pages/Accessories.vue";
import Contributors from "@/pages/Contributors.vue";
import ItemCard from "@/pages/ItemCard.vue";

Vue.use(Router);
let router = new Router({
   routes: [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/contributors",
    name: "contributors",
    component: Contributors,
  },
  {
    path: "/phones",
    name: "phones",
    component: Phones,
  },
  {
    path: "/phones/:id",
    name: "phonePage",
    component: ItemCard,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: Favourites,
  },
  {
    path: "/tablets",
    name: "tablets",
    component: Accessories,
  },
  {
    path: "/accessories",
    name: "accessories",
    component: Accessories,
  },
  {
    path: "/:pathMatch(.*)*", //Для обработки запросов к несуществующим ресурсам
    name: "notFound",
    component: NotFound,
  },
]
})

export default router;
