import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accounts/signup",
    name: "Sign Up",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/accounts/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/modules",
    name: "Modules",
    component: () => import("../views/Modules.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
