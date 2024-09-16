import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Dashboard | | Jowam Portal",
    },
    beforeEnter: (_, __, next) => {
      store
        .dispatch("fetchStudents")
        .then(() => {
          next();
        })
        .catch(() => {
          next(false);
        });
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
    meta: {
      title: "Login | | Jowam Portal",
    },
  },
  {
    path: "/students/:id",
    name: "Student Details",
    component: () => import("../views/students/student_details.vue"),
    meta: {
      requiresAuth: true,
      title: "Student Info | | Jowam Portal",
    },
    beforeEnter: (to, __, next) => {
      store
        .dispatch("getStudent", to.params.id)
        .then(() => {
          next();
        })
        .catch(() => {
          next(false);
        });
    },
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../views/students/Students.vue"),
    meta: {
      requiresAuth: true,
      title: "Students | | Jowam Portal",
    },
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("../views/reports.vue"),
    meta: {
      title: "Reports | | Jowam Portal",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT = "JOWAM PORTAL";
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT;
  });
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/accounts/login");
  } else {
    next();
  }
});

export default router;
