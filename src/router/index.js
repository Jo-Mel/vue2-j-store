import Vue from "vue";
import VueRouter from "vue-router";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/my-cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "my-cart" */ "../views/Cart.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
