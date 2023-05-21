<template>
  <v-app-bar flat class="appbar">
    <img width="150px" :src="require('../assets/logo.png')" alt="logo" @click="$router.push('/')">
  </v-app-bar>
</template>

<style>
img {
  cursor: pointer;
}
</style>