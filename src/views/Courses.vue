<template>
  <div class="modules">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <div class="d-flex justify-space-between">
          <h1 class="display-2">Courses</h1>

          <div class="new-course">
            <new-course />
          </div>
        </div>

        <div class="row-div">
          <div class="loader" v-if="isLoading" />

          <div v-else class="card-div">
            <v-card
              dark
              width="300px"
              height="300px"
              v-for="(course, i) in courses"
              :key="i"
              color="brown"
              @click="$router.push(`/courses/${course._id}`)"
            >
              <v-card-title class="display-1 pa-0">{{
                course.name
              }}</v-card-title>
              <v-card-text class="subtitle-4 pa-0 mt-5">
                <v-icon>mdi-page-layout-body</v-icon>
                {{ course.topics.length }} topics
              </v-card-text>
              <v-card-text class="subtitle-4 pa-0 mt-2">
                <v-icon>mdi-cash</v-icon>
                Module Fee: {{ course.feeAmount }}
              </v-card-text>
            </v-card>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "courses",

  components: {
    "new-course": require("../components/new_course_dialog.vue").default,
  },

  created() {
    this.$store.dispatch("fetchCourses");
  },

  computed: {
    ...mapGetters(["courses", "isLoading"]),
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
      .card-div {
        display: flex;
        .v-card {
          margin: 0 20px 0 0;
          padding: 1rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          text-transform: capitalize;
          justify-content: flex-end;
        }
      }
    }
    .loader {
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid rgb(71, 92, 71); /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      margin: 20% auto 0 60%;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
