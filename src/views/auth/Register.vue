<template>
  <div>
    <auth-nav-bar></auth-nav-bar>
    <main>
      <v-alert
        v-show="error"
        type="error"
        dense
        dismissible
        prominent
        style="margin: 2rem auto"
      >
        {{ error }}
      </v-alert>
      <form action="#">
        <h1 class="mb-10">Sign up</h1>

        <label for="name">Name<span>*</span></label>
        <input type="text" name="name" id="name" v-model="formData.name" />
        <label for="email">Email<span>*</span></label>
        <input type="email" name="email" id="email" v-model="formData.email" />
        <label for="password">Password<span>*</span></label>
        <input type="password" name="password" v-model="formData.password" />
        <label for="confirmPass">Password Confirmation<span>*</span></label>
        <input
          type="password"
          name="confirmPass"
          :class="!passwordMatch ? 'error' : ''"
          v-model="formData.confirmPass"
        />
        <p class="error-text" v-if="!passwordMatch">Passwords don't match</p>

        <v-btn
          depressed
          dark
          color="green darken-3"
          class="mt-10"
          @click="register"
          >Sign Up
        </v-btn>
      </form>
    </main>

    <footer>
      <auth-footer />
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Register",

  components: {
    "auth-nav-bar": require("@/components/auth_navbar.vue").default,
    "auth-footer": require("@/components/auth_footer.vue").default,
  },

  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPass: "",
      },
    };
  },

  computed: {
    ...mapGetters(["user, isLoading", "error"]),

    passwordMatch() {
      return this.formData.confirmPass === this.formData.password;
    },
  },

  // check if user is logged in
  watch: {
    user(val) {
      if (val !== null && val !== undefined) {
        this.$router.push("/");
      }
    },
  },

  methods: {
    async register() {
      let name = this.formData.name;
      let email = this.formData.email;
      let pass = this.formData.password;

      if (name === "" || email === "" || pass === "") {
        alert("Fill all required fields!");
      }

      await this.$store.dispatch("register", this.formData);
      this.$router.push("/accounts/login");
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 40%;
  margin: 3rem auto;
  input,
  select {
    width: 100%;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 10px;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }

  .error {
    border: 1px solid red;
    background-color: white;
  }

  .error-text {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }

  label {
    display: block;
    margin: 1.5rem 0 5px 0;
    span {
      color: red;
      margin-left: 2px;
    }
  }
}

footer {
  position: absolute;
  bottom: 0;
}
</style>
