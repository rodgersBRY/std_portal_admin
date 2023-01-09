<template>
  <div class="modules">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <div class="header-div">
          <h1 class="display-2">Courses</h1>

          <div class="new-course">
            <new-course />
          </div>
        </div>

        <div class="row-div">
          <div class="loader" v-if="isLoading" />

          <div v-else class="card-div">
            <div v-if="courses.length === 0">
              <h3 class="grey--text">Add new courses to see more details</h3>
            </div>
            <v-card
              v-else
              dark
              v-for="course in courses"
              :key="course._id"
              :color="randomColor"
              @click="$router.push(`/courses/${course.name}/${course._id}`)"
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

    randomColor() {
      return (
        "#" +
        (
          "00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(11)
        ).slice(-6)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1000px) {
  main {
    .header-div {
      display: flex;
      justify-content: space-between;
    }
    .row-div {
      .card-div {
        .v-card {
          width: 300px;
          height: 300px;
          margin: 0 10px;
        }
      }
    }

    .loader {
      width: 120px;
      height: 120px;
      margin: 20% auto 0 40%;
    }
  }
}

@media screen and (max-width: 1000px) {
  main {
    .header-div {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      h1 {
        margin-top: 2rem;
      }
    }
    .row-div {
      .card-div {
        flex-direction: column;
        .v-card {
          width: 100%;
          height: 300px;
          margin: 10px auto;
        }
      }
    }

    .loader {
      width: 30px;
      height: 30px;
      margin: 10% auto 0 30%;
    }
  }
}
.modules {
  main {
    margin-left: 60px;
    padding: 2rem;
    .row-div {
      margin-top: 3rem;
      .card-div {
        display: flex;
        .v-card {
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
