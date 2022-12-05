<template>
  <div>
    <auth-nav-bar></auth-nav-bar>
    <main>
      <v-snackbar
        v-model="ifError"
        timeout="2000"
        :value="true"
        color="error"
        multi-line
        absolute
        text
        centered
        top
      >
        {{ error }}
        <template v-slot:action="{ attrs }">
          <v-btn color="brown" text v-bind="attrs" @click="ifError = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

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
          :loading="isLoading"
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
        ifError: false,
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
    error(val) {
      if (val !== null) {
        console.log(val);
        this.ifError = true;
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
@media screen and (min-width: 1000px) {
  form {
    width: 40%;
    margin: 3rem auto;
  }
  footer {
    position: absolute;
    bottom: 2%;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 100%;
    padding: 1rem;
    margin: 2rem auto;
  }
}

form {
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
  width: 100%;
}
</style>
