<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",

  created() {
    axios.interceptors.response.use(undefined, (err) => {
      return new Promise((_, reject) => {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        reject(err);
      });
    });
  },

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
