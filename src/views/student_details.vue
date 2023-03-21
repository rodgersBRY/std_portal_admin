<template>
  <div id="student-details">
    <sidenav />

    <main v-for="student in students" :key="student._id">
      <div v-if="student._id === studentId" class="student-inf">
        <div class="student-info">
          <div class="student-name">
            <div id="printStud">
              <h1>{{ student.code }} - {{ student.name }}</h1>
              <p>Age: {{ student.age }} yrs</p>
              <edit-user-dialog :user="student" />
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
          <div class="contact-info" id="contactPrint">
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
          <v-btn depressed class="print-btn mb-10" @click="printSection()">
            Print
            <v-icon class="ml-4" color="green">mdi-printer</v-icon>
          </v-btn>

          <div id="print">
            <h2>Activity Log</h2>
            <table border="1" cellpadding="3" class="table">
              <tbody>
                <tr>
                  <th>Activity</th>
                  <th>Fee Balance</th>
                  <th>Value</th>
                  <th>Timestamp</th>
                </tr>
                <tr v-for="activity in student.activity" :key="activity._id">
                  <td>{{ activity.title }}</td>
                  <td>{{ activity.prev_balance }}</td>
                  <td>{{ activity.value }}</td>
                  <td>{{ activity.ts | dateFilter }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditUser from '../components/edit-user.vue';

export default {
  name: "student-details",

  components: {
    "edit-user-dialog": EditUser
  },

  data() {
    return {
      studentId: this.$route.params.studentId,
      status: true,
      dialogUpdate: false,
      dialogEnroll: false,
      amount: "",
      course: "",
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
    printSection() {
      // window.print()
      var activityLog = document.getElementById("print");
      var studentInfo = document.getElementById("printStud");
      var contactInfo = document.getElementById("contactPrint");

      var newWin = window.open("");

      newWin.document.write(studentInfo.outerHTML);
      newWin.document.write(contactInfo.outerHTML);
      newWin.document.write(activityLog.outerHTML);
      newWin.print();
      newWin.close();
    },

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
.table {
  border-collapse: collapse;
  width: 100%;
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background: green;
    color: white;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}

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
