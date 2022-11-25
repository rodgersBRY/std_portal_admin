<template>
  <v-container class="sidenav green darken-2">
    <h2 class="app-name">
      <span
        ><v-icon color="white" style="margin-right: 10px">
          mdi-account-circle-outline
        </v-icon>
      </span>
      Admin Portal
    </h2>

    <ul class="nav-links" style="margin-top: 2rem">
      <router-link class="nav-link" tag="li" exact-active-class="active" to="/">
        <span><v-icon color="white">mdi-home</v-icon></span>
        Home
      </router-link>
      <router-link
        class="nav-link"
        tag="li"
        active-class="active"
        to="/students"
      >
        <span><v-icon color="white">mdi-account-group-outline</v-icon> </span>
        Enrolled Students
      </router-link>
      <router-link
        class="nav-link"
        tag="li"
        active-class="active"
        to="/instructors"
      >
        <span><v-icon color="white">mdi-school-outline</v-icon></span>
        Instructors
      </router-link>
      <router-link
        class="nav-link"
        tag="li"
        active-class="active"
        to="/courses"
      >
        <span><v-icon color="white">mdi-book-open</v-icon></span>
        Offered Courses
      </router-link>
      <v-btn
        dark
        class="logout-btn"
        color="brown darken-3"
        block
        tag="li"
        @click="signout"
      >
        <span> <v-icon color="white">mdi-logout</v-icon> </span>
        Logout
      </v-btn>
    </ul>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sidenav",

  computed: {
    ...mapGetters(["user", "isAuthenticated"]),
  },

  watch: {
    isAuthenticated(val) {
      if (!val) {
        this.$router.push("/accounts/login");
      }
    },
  },

  methods: {
    signout() {
      this.$store.dispatch("logout");
      this.$router.push("/accounts/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  position: fixed;
  top: 0;
  z-index: 1;
  color: white;
  height: 100vh;
  width: 260px;
  padding: 4rem 10px 0 10px;
  .nav-links {
    list-style: none;
    padding: 0;
    .nav-link {
      padding: 10px;
      margin: 1rem 0;
      cursor: pointer;
      border-radius: 5px;
      &:hover,
      &.active {
        background: rgb(225, 225, 225, 0.2);
      }
      span {
        margin-right: 10px;
      }
    }
    .logout-btn {
      margin-top: 10rem;
    }
  }
}
</style>
