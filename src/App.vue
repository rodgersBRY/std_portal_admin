<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapGetters(["user"]),
  },

  // check if user is logged in
  watch: {
    user(val) {
      if (val !== null && val !== undefined) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
:root {
  --primary-color: rgba(90,49,21,255);
  --secondary-color: rgba(241,70,35,255);
  --accent-color: rgb(222,210,203);
}
</style>