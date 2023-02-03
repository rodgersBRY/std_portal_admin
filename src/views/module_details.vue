<template>
  <div class="module-details">
    <sidenav />

    <main v-for="course in courses" :key="course._id">
      <div class="main-section" v-if="course._id === courseId">
        <section class="title-div">
          <h1 style="text-transform: capitalize">{{ course.name }}</h1>
          <p class="my-6">Students Enrolled: {{ studentsPerCourse.length }}</p>
          <v-btn text @click="deleteCourse(course._id)" color="red">
            <v-icon>mdi-delete</v-icon> Delete Module
          </v-btn>
        </section>
        <br />

        <section class="course-info">
          <div class="course-outline px-10">
            <h2>Course Outline</h2>
            <ul class="topics-list">
              <li v-for="(topic, i) in course.topics" :key="i">
                {{ topic.title }}
              </li>
            </ul>
          </div>
          <v-divider vertical></v-divider>
          <div class="students px-4">
            <h2>Students</h2>
            <v-data-table
              :item-key="studentsPerCourse.code"
              :headers="headers"
              :items="studentsPerCourse"
              :search="search"
              :loading="isLoading"
              loading-text="Loading... Please wait"
            >
              <template v-slot:item.name="{ item }">
                <div
                  style="
                    cursor: pointer;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                  "
                  @click="$router.push(`/student-details/${item._id}`)"
                >
                  {{ item.name }}
                </div>
              </template>
            </v-data-table>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      courseId: this.$route.params.courseId,
      courseTitle: this.$route.params.courseTitle,
      search: "",
      headers: [
        {
          text: "Reg No",
          sortable: false,
          value: "code",
        },
        {
          text: "Full Name",
          sortable: true,
          value: "name",
        },
      ],
    };
  },

  created() {
    this.$store.dispatch("getStudentsPerCourse", this.courseTitle);
  },

  computed: {
    ...mapGetters(["courses", "isLoading", "studentsPerCourse"]),
  },

  methods: {
    async deleteCourse(id) {
      await this.$store.dispatch("deleteCourse", id);
      this.$router.push("/courses");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  margin: 0 0 0 60px;
  text-align: center;
  .title-div {
    background: rgba(10, 139, 10, 0.2);
    padding: 2rem 0;
  }

  .subtitle {
    color: rgb(175, 175, 175);
  }

  .subtitle,
  p {
    font-size: 20px;
    font-weight: bold;
  }

  @media screen and (min-width: 1000px) {
    .course-info {
      width: 80%;
    }
  }

  @media screen and (max-width: 1000px) {
    .course-info {
      flex-direction: column;
      width: 100%;
    }
  }
  .course-info {
    display: flex;
    margin: 10px auto;
    .course-outline {
      width: 100%;
      .topics-list {
        list-style: none;
        padding-left: 0;
        li {
          margin: 1rem 0;
          padding: 10px 5px;
          border: 1px solid rgb(204, 204, 204);
        }
      }
    }
    .students {
      width: 100%;
    }
  }
}
</style>
