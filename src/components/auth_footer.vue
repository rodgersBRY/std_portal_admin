<template>
  <div>
    <img width="50px" :src="require('../assets/logo.webp')" />
    <h3>Student Portal</h3>
    <v-divider vertical class="grey lighten-3 mx-10"></v-divider>
    <p class="text-center">
      &copy; {{ year }} Jowam Training Centre <br />
      Powered By Mawira Corp
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  div {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
}

@media screen and (min-width: 1000px) {
  div {
    justify-content: center;
    padding: 10px;
  }
}

div {
  display: flex;
  p {
    margin: 0;
  }
}
</style>
