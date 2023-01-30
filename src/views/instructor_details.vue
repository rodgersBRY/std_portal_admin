<template>
  <div id="instructor-details">
    <sidenav />

    <main v-for="instructor in instructors" :key="instructor._id">
      <div v-if="instructor._id === instructorId" class="instructor-info">
        <div class="instructor-name">
          <div>
            <h1>{{ instructor.code }} - {{ instructor.name }}</h1>
            <p>Age: {{ instructor.age }} yrs</p>
          </div>
        </div>

        <hr />
        <div class="contact-info">
          <p>
            <em>{{ instructor.email }}</em>
          </p>

          <p>Tel: {{ instructor.phone }}</p>
          <p>
            Enrollment date: {{ new Date(instructor.createdAt).toDateString() }}
          </p>
        </div>

        <div v-if="instructor.fee_balance !== 'Ksh. 0.0'" class="course-info">
          <div class="d-flex justify-space-between">
            <h3 class="ml-5">Expertise</h3>
            <v-btn icon color="green" class="mr-4" @click="enrollDialog = true">
              <v-icon size="30">mdi-plus</v-icon>
            </v-btn>
          </div>
          <div v-if="instructor.modules.length > 0" class="courses-list">
            <ul>
              <li
                v-for="module in instructor.modules"
                :key="module._id"
                class="d-flex justify-space-between"
                style="text-transform: capitalize"
              >
                {{ module.name }}
              </li>
            </ul>
          </div>
        </div>

        <!-- enroll student to more courses -->
        <v-dialog persistent v-model="enrollDialog" max-width="500px">
          <v-card class="text-center px-11">
            <v-card-title class="text-h5">Select a Course</v-card-title>
            <v-select
              label="Select Course"
              single-line
              id="course"
              v-model="course"
              :items="courseNames"
            >
            </v-select>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" text @click="enrollDialog = false">
                Cancel
              </v-btn>
              <v-btn
                color="brown darken-1"
                text
                :loading="isLoading"
                @click="enrollInstructor"
                @keyup.enter="enrollInstructor"
              >
                OK
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "instructor-details",

  data() {
    return {
      instructorId: this.$route.params.instructorId,
      status: true,
      dialogUpdate: false,
      amount: "",
      enrollDialog: false,
      course: "",
    };
  },

  computed: {
    ...mapGetters(["instructors", "isLoading", "courses"]),

    courseNames() {
      let courses = [];
      for (let course of this.courses) {
        courses.push(course.name);
      }
      return courses;
    },
  },

  methods: {
    updateFee() {
      let updateData = {
        id: this.instructorId,
        amount: this.amount,
      };

      this.$store.dispatch("updateInstructorFee", updateData);
      this.amount = "";
      this.dialogUpdate = false;
      this.$router.push("/instructors");
    },

    async enrollInstructor() {
      let payload = {
        instructorId: this.instructorId,
        moduleName: this.course,
      };

      await this.$store.dispatch("enrollInstructor", payload);
      this.course = "";
      this.enrollDialog = false;
      this.$router.push("/instructors");
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1000px) {
  .instructor-info {
    width: 50%;
  }
}

@media screen and (max-width: 1000px) {
  .instructor-info {
    width: 90%;
  }
}

main {
  margin: 20px 0 0 60px;
  .instructor-info {
    margin: 10% auto;
    // border: 1px solid grey;
    border-radius: 10px;
    padding: 5rem;
    box-shadow: 5px 5px 1rem grey;

    .instructor-name {
      display: flex;
      justify-content: space-between;
    }
    .contact-info {
      margin-top: 20px;
    }
    .course-info {
      border: 1px solid rgb(223, 223, 223);
      border-radius: 10px;
      padding: 10px 0;
      margin-top: 2rem;
      .courses-list {
        background-color: rgb(241, 241, 241);
        margin: 10px 0;

        ul {
          list-style: none;
          padding: 0;
          li {
            padding: 7px 24px;
            font-size: 20px;
            &:hover {
              background-color: rgb(78, 78, 78);
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
