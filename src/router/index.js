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
    path: "/courses/:courseId",
    name: "Course Details",
    component: () => import("../views/module_details.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/Courses.vue"),
  },
  {
    path: "/student-details/:studentId",
    name: "Student Details",
    component: () => import("../views/student_details.vue"),
  },
  {
    path: "/students",
    name: "Students",
    component: () => import("../views/Students.vue"),
  },
  {
    path: "/instructors",
    name: "Instructors",
    component: () => import("../views/Instructors.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
