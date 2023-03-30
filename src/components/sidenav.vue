<template>
  <v-container class="sidenav green darken-2">
    <h2 class="app-name">
      <span
        ><v-icon color="white" style="margin-right: 10px">
          mdi-account-circle-outline
        </v-icon>
      </span>
      {{ user ? user.name : "Admin Portal" }}
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
        <span><v-icon color="white">mdi-account-school</v-icon></span>
        Instructors
      </router-link>
      <router-link
        class="nav-link"
        tag="li"
        active-class="active"
        to="/courses"
      >
        <span><v-icon color="white">mdi-book-open-variant</v-icon></span>
        Offered Courses
      </router-link>

      <router-link
        v-if="user.role == 'admin'"
        class="nav-link"
        tag="li"
        active-class="active"
        to="/reports"
      >
        <span><v-icon color="white">mdi-poll</v-icon></span>
        Reports
      </router-link>
    </ul>

    <div class="absolute-tags">
      <v-btn
        dark
        class="logout-btn"
        color="brown darken-3"
        block
        tag="li"
        right
        @click="signout"
      >
        <v-icon color="white">mdi-logout</v-icon>
        <span id="logout-txt">Logout </span>
      </v-btn>

      <v-btn @click="toggleSidebar" color="white" class="mt-10" oultined icon>
        <v-icon>{{ mini ? "mdi-chevron-right" : "mdi-chevron-left" }}</v-icon>
      </v-btn>
    </div>
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

  data() {
    return {
      mini: false,
    };
  },

  methods: {
    signout() {
      this.$store.dispatch("logout");
      this.$router.push("/accounts/login");
    },

    toggleSidebar() {
      var sidenav = document.getElementsByClassName("sidenav")[0];
      var logoutTxt = document.getElementById("logout-txt");

      if (this.mini) {
        sidenav.style.width = "260px";
        logoutTxt.style.display = "block";
        this.mini = false;
      } else {
        sidenav.style.width = "65px";
        logoutTxt.style.display = "none";
        this.mini = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#logout-txt {
  display: none;
}

h2 {
  overflow-x: hidden;
  white-space: nowrap;
  span {
    margin-right: 10px;
  }
}
.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: white;
  height: 100vh;
  width: 65px;
  padding: 4rem 10px 0 10px;
  transition: width 0.5s ease;
  .nav-links {
    list-style: none;
    padding: 0;
    .nav-link {
      padding: 10px;
      margin: 1rem 0;
      cursor: pointer;
      border-radius: 5px;
      overflow-x: hidden;
      white-space: nowrap;
      &:hover,
      &.active {
        background: rgb(225, 225, 225, 0.2);
      }
      span {
        margin-right: 30px;
      }
    }
  }
  .absolute-tags {
    position: relative;
    top: 2.5rem;
  }
}
</style>
