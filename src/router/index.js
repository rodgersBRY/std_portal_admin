import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {},
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
    },
  },
  {
    path: "/student-details/:studentId",
    name: "Student Details",
    component: () => import("../views/student_details.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../views/Students.vue"),
    meta: {
      requiresAuth: true,
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
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("userId")) {
      next();
      return;
    }
    next("/accounts/login");
  } else {
    next();
  }
});

export default router;
