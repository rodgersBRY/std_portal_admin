<template>
  <div id="navbar">
    <div class="logo">
      <img :src="require('@/assets/logo.png')" alt="training centre logo">
    </div>

    <div class="nav-items">
      <ul>
        <router-link exact-active-class="active" to="/" tag="li">Home</router-link>
        <router-link exact-active-class="active" to="/students" tag="li">Students</router-link>
        <router-link active-class="active" to="/reports" tag="li">Reports</router-link>
      </ul>
    </div>

    <div class="logout">
      <v-btn depressed dark color="brown lighten-3" @click="signout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions(['logout']),

    signout() {
      this.logout();
    },
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  height: 65px;
  .logo {
    width: 200px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-items {
    ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
      li {
        width: 120px;
        height: 65px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover,
        &.active {
          cursor: pointer;
          color: brown;
          background-color: rgb(220, 213, 213);
          border-bottom: 3px solid brown;
        }   
      }
     
    }
  }
}
</style>