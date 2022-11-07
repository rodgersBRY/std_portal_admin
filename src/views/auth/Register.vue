<template>
  <div>
    <auth-nav-bar></auth-nav-bar>
    <main>
  
      <form action="#">
        <h1 class="mb-10">Sign up</h1>

        <label for="email">Email*</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="formData.email"
        />
        <label for="password">Password*</label>
        <input
          type="password"
          name="password"
          v-model="formData.password"
        />
        <label for="confirmPass">Password Confirmation*</label>
        <input
          type="password"
          name="confirmPass"
          v-model="formData.confirmPass"
        />

        <v-btn depressed dark color="green darken-3" class="mt-10"
          >Sign Up</v-btn
        >
      </form>
    </main>

    <footer>
      <auth-footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Register",

  components: {
    "auth-nav-bar": require("@/components/auth_navbar.vue").default,
    "auth-footer": require("@/components/auth_footer.vue").default,
  },

  data() {
    return {

      formData: {
        email: "",
        password: "",
        confirmPass: "",
      },
    };
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

  label {
    display: block;
    margin: 1.5rem 0 5px 0;
  }
  .align-row {
    display: flex;
    justify-content: space-between;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0;
      input,
      select {
        width: 100%;
      }
    }
  }
  .v-btn {
    display: block;
  }
}

footer {
  position: absolute;
  bottom: 2%;
}
</style>
