<template>
  <div>
    <auth-nav-bar />

    <main>
      <div class="signin-form">
        <h1>Sign In</h1>

        <input v-model="email" type="text" name="email" id="email" placeholder="Email" />

        <div class="password-input">
          <input v-model="password" :type="inputType" name="password" placeholder="Password" id="password" />

          <span @click="togglePassword" class="toggle-icon">
            <v-icon color="grey">{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
          </span>
        </div>

        <p v-if="error" class="error-text">{{ error }}</p>

        <v-btn :loading="isLoading" @click="signin" dark depressed class="sign-btn">Sign In</v-btn>
      </div>
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
      showPassword: false,
    };
  },

  computed: {
    ...mapGetters(["error", "isLoading"]),

    inputType() {
      return this.showPassword ? 'text' : 'password'
    }
  },

  methods: {
    ...mapActions(["login", "clearError", "setError"]),

    async signin() {
      const userData = new FormData();
      userData.append("email", this.email);
      userData.append("password", this.password);

      await this.login(userData);

      if (this.error) {
        this.password = ""
      }
    },

    togglePassword() {
      this.showPassword = !this.showPassword
    },

    resetError() {
      this.clearError();
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: rgb(243, 243, 243);
  padding: 3rem 0;
  height: 100vh;
  .signin-form {
    background-color: white;
    width: 35%;
    margin: auto;
    display: flex;
    gap: 1.5rem;
    padding: 3rem 0;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    input {
      padding: 10px;
      background-color: rgb(237, 237, 237);
      width: 75%;
      margin: 0 auto;
      border-radius: 10px;
      &:focus {
        outline: none;
      }
    }
    .password-input {
      position: relative;
      width: 75%;
      input {
        width: 100%;
      }
      .toggle-icon {
        position: absolute;
        right: 1rem;
        top: 10px;
        color: grey;
      }
    }
    .error-text {
      background-color: rgb(254, 200, 200);
      width: 75%;
      padding: 10px;
      border-left: 4px solid red;
      color: red;
      font-weight: bold;
      font-size: 13px;
    }
  }
}
</style>
