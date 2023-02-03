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
  },
  {
    path: "/accounts/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
    meta: {
      title: "JOWAM PORTAL | LOGIN",
    },
  },
  {
    path: "/courses/:courseTitle/:courseId",
    name: "Course Details",
    component: () => import("../views/module_details.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/Courses.vue"),
    meta: {
      requiresAuth: true,
      title: "COURSES OFFERED",
    },
  },
  {
    path: "/student-details/:studentId",
    name: "Student Details",
    component: () => import("../views/student_details.vue"),
    meta: {
      requiresAuth: true,
      title: "",
    },
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../views/Students.vue"),
    meta: {
      requiresAuth: true,
      title: "STUDENTS",
    },
  },
  {
    path: "/instructors/:instructorId",
    name: "Instructor Details",
    component: () => import("../views/instructor_details.vue"),
  },
  {
    path: "/instructors",
    name: "Instructors",
    component: () => import("../views/Instructors.vue"),
    meta: {
      requiresAuth: true,
      title: "INSTRUCTORS",
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
