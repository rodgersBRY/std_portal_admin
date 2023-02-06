<template>
  <div id="student-details">
    <sidenav />

    <main v-for="student in students" :key="student._id">
      <div v-if="student._id === studentId" class="student-inf">
        <div class="student-info">
          <div class="student-name">
            <div>
              <h1>{{ student.code }} - {{ student.name }}</h1>
              <p>Age: {{ student.age }} yrs</p>
            </div>
            <v-switch
              v-model="student.checkedIn"
              :label="student.checkedIn ? 'Check Out' : 'Check In'"
              color="green"
              inset
              @change="changeCheckInStatus(student.checkedIn)"
            ></v-switch>
          </div>

          <hr />
          <div class="contact-info">
            <p>
              <em>{{ student.email }}</em>
            </p>

            <p>Tel: {{ student.phone }}</p>
            <p>
              Enrollment date:
              {{
                new Date(student.createdAt).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              }}
            </p>
          </div>

          <div v-if="student.fee_balance !== 'Ksh. 0.0'" class="course-info">
            <div class="d-flex justify-space-between">
              <h3 class="ml-5">Enrolled Courses</h3>
              <v-btn
                icon
                color="green"
                class="mr-4"
                @click="dialogEnroll = true"
              >
                <v-icon size="30">mdi-plus</v-icon>
              </v-btn>
            </div>
            <div v-if="student.modules.length > 0" class="courses-list">
              <ul>
                <li
                  v-for="module in student.modules"
                  :key="module._id"
                  class="d-flex justify-space-between"
                  style="text-transform: capitalize"
                >
                  {{ module.name }}
                  <span style="font-size: 14px; color: grey">
                    Ksh. {{ module.amount }}
                  </span>
                </li>
              </ul>
            </div>

            <h2
              :class="[
                student.fee_balance !== 'Ksh. 0.0'
                  ? 'warning--text'
                  : 'grey--text',
                'ml-5',
              ]"
            >
              Fee Balance(Ksh): {{ student.fee_balance }}
            </h2>
          </div>

          <v-btn
            color="green"
            outlined
            @click="dialogUpdate = true"
            class="mt-10"
            >Update Fee Balance</v-btn
          >

          <!-- enroll student to more courses -->
          <v-dialog persistent v-model="dialogEnroll" max-width="500px">
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
                <v-btn color="grey darken-1" text @click="dialogEnroll = false">
                  Cancel
                </v-btn>
                <v-btn
                  color="brown darken-1"
                  text
                  :loading="isLoading"
                  @click="enrollStudent"
                  >OK</v-btn
                >
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- update fee balance -->
          <v-dialog v-model="dialogUpdate" max-width="500px">
            <v-card class="text-center">
              <v-card-title class="text-h5">Enter the paid amount</v-card-title>
              <v-text-field
                type="number"
                min="0"
                outlined
                label="Amount (Ksh)"
                v-model="amount"
                style="width: 70%; margin: 10px auto"
                color="brown"
              >
              </v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-1" text @click="dialogUpdate = false">
                  Cancel
                </v-btn>
                <v-btn
                  color="brown darken-1"
                  text
                  :loading="isLoading"
                  @click="updateFee"
                  >OK</v-btn
                >
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- student activity log -->
        <div class="activity-log">
          <v-btn depressed class="print-btn mb-10">
            Print
            <v-icon class="ml-4" color="green">mdi-printer</v-icon>
          </v-btn>

          <v-list>
            <v-list-item class="d-flex justify-space-between grey--text">
              <v-item-item-title> Activity </v-item-item-title>
              <v-list-item-text> Value </v-list-item-text>
              <v-list-item-text> Timestamp </v-list-item-text>
            </v-list-item>
            <v-list-item
              class="d-flex justify-space-between grey--text"
              v-for="activity in student.activity"
              :key="activity._id"
            >
              <v-item-item-title>
                {{ activity.title }}
              </v-item-item-title>
              <v-list-item-text>
                {{ activity.value }}
              </v-list-item-text>
              <v-list-item-text>
                {{ activity.ts | dateFilter }}
              </v-list-item-text>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "student-details",

  data() {
    return {
      studentId: this.$route.params.studentId,
      status: true,
      dialogUpdate: false,
      dialogEnroll: false,
      amount: "",
      course: "",
      // checkedIn: false,
    };
  },

  computed: {
    ...mapGetters(["students", "isLoading", "courses"]),

    courseNames() {
      let courses = [];
      for (let course of this.courses) {
        courses.push(course.name);
      }
      return courses;
    },
  },

  filters: {
    dateFilter(val) {
      if (!val) return;

      var date = new Date(val).toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
      return date;
    },
  },

  methods: {
    changeCheckInStatus(status) {
      this.$store.dispatch("checkStudentIn", {
        studentId: this.studentId,
        status: status,
      });
      console.log(status);
    },

    async updateFee() {
      let updateData = {
        id: this.studentId,
        amount: this.amount,
      };

      await this.$store.dispatch("updateStudentFee", updateData);
      this.$store.dispatch("fetchStudents");
      this.amount = "";
      this.dialogUpdate = false;
      this.$router.push("/students");
    },

    async enrollStudent() {
      let payload = {
        studentId: this.studentId,
        moduleName: this.course,
      };

      await this.$store.dispatch("enrollStudentToCourse", payload);
      this.course = "";
      this.dialogEnroll = false;
      this.$router.push("/students");
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1000px) {
  .student-info,
  .activity-log {
    width: 70%;
  }
}

@media screen and (max-width: 1000px) {
  .student-info,
  .activity-log {
    width: 90%;
  }
}

main {
  margin: 20px 0 0 60px;
  .activity-log {
    margin: 10% auto;
    padding: 5rem;
  }
  .student-info {
    margin: 10% auto;
    border-radius: 10px;
    padding: 5rem;
    box-shadow: 5px 5px 1rem grey;

    .student-name {
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
