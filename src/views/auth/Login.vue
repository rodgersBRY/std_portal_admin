<template>
  <div>
    <auth-nav-bar />

    <main>
      <div class="alert">
        <v-snackbar
          v-if="error"
          timeout="10000"
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
            <v-btn color="brown" text v-bind="attrs" @click="removeError">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>

      <section class="login d-flex align-center">
        <div class="img mr-10">
          <img
            width="100%"
            :src="require('@/assets/retro.svg')"
            alt="ecommerce"
          />
        </div>

        <div class="form">
          <form @submit.prevent="signin">
            <label for="email">Email<span>*</span></label>
            <input type="email" name="email" id="email" v-model="email" />
            <label for="password">Password<span>*</span></label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />

            <v-btn
              depressed
              dark
              color="green darken-3"
              class="my-10"
              type="submit"
              :loading="isLoading"
              @keyup.enter="signin"
              >Login
            </v-btn>
          </form>

          <v-divider class="mb-8" />
        </div>
      </section>
    </main>

    <footer>
      <auth-footer />
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",

  components: {
    "auth-nav-bar": require("@/components/auth_navbar.vue").default,
    "auth-footer": require("@/components/auth_footer.vue").default,
  },

  data() {
    return {
      email: "",
      password: "",
      ifError: false,
    };
  },

  computed: {
    ...mapGetters(["error", "isLoading"]),
  },

  methods: {
    ...mapActions(["login", "clearError"]),

    async signin() {
      if (this.email == "" || this.password == "") {
        alert("fill in all required fields!");
      } else {
        const userData = new FormData();
        userData.append("email", this.email);
        userData.append("password", this.password);

        this.login(userData);
      }
    },

    removeError() {
      this.clearError();
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1000px) {
  .login {
    margin: 2rem auto;
    width: 70%;
    height: 70vh;
    margin: auto;
    .img,
    .form {
      flex: 2;
    }
    .form {
      width: 100%;
      input[type="submit"] {
        width: 100px;
      }
    }
  }

  footer {
    position: absolute;
    bottom: 2%;
  }
}

@media screen and (max-width: 1000px) {
  .login {
    margin: 5rem auto;
    width: 90%;
    flex-direction: column;
    .form {
      width: 100%;
    }
  }
}

.login {
  display: flex;

  .form {
    label {
      display: block;
      margin: 2rem 0 0.5rem 0;
      span {
        color: red;
        margin-left: 3px;
      }
    }
    input[type="email"],
    input[type="password"] {
      padding: 10px;
      border: 1px solid rgb(224, 224, 224);
      border-radius: 5px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }

    input[type="submit"] {
      display: block;
      margin: 2rem 0;
      background: green;
      padding: 10px;
      border-radius: 5px;
      color: white;
      &:hover {
        background: rgb(88, 129, 88);
      }
    }
    .recover-account {
      display: flex;
      justify-content: space-between;
      p {
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: green;
        }
      }
    }
  }
}

footer {
  width: 100%;
}
</style>
