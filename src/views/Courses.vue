<template>
  <div class="modules">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <h1 class="display-2">Courses</h1>

        <v-row no-gutters wrap justify="space-between" class="row-div">
          <!-- <v-card
            dark
            width="300px"
            height="300px"
            v-for="(course, i) in courses"
            :key="i"
            :color="course.color"
          >
            <v-card-title class="display-1">{{ course.title }}</v-card-title>
            <v-card-text class="subtitle-4">
              <v-icon>mdi-account-multiple</v-icon>
              {{ course.students }} students
            </v-card-text>
          </v-card> -->
          {{ courses }}
        </v-row>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "courses",

  created() {
    this.$store.dispatch("fetchCourses");
  },

  computed: {
    ...mapGetters(["courses"]),
  },
};
</script>

<style lang="scss" scoped>
.modules {
  main {
    margin-left: 260px;
    padding: 3rem;
    .row-div {
      width: 70%;
      margin: 3rem 0;
      .v-card {
        cursor: pointer;
      }
    }
  }
}
</style>
