<template>
  <div id="student-details">
    <sidenav />

    <main v-for="student in students" :key="student._id">
      <div v-if="student._id === studentId" class="student-info">
        <div class="student-name">
          <div>
            <h1>{{ student.code }} - {{ student.name }}</h1>
            <p>Age: {{ student.age }} yrs</p>
          </div>
          <v-switch
            v-model="status"
            @change="updateStatus"
            color="green"
            :label="[status ? 'Active' : 'Inactive']"
          >
            <template v-slot:label>
              {{ status ? "Active" : "Inactive" }}
            </template>
          </v-switch>
        </div>

        <hr />
        <div class="contact-info">
          <p>
            <em>{{ student.email }}</em>
          </p>

          <p>Tel: {{ student.phone }}</p>
          <p>
            Enrollment date: {{ new Date(student.createdAt).toDateString() }}
          </p>
        </div>

        <div v-if="student.fee_balance !== 'Ksh. 0.0'" class="course-info">
          <h3 class="ml-5">Enrolled Courses</h3>
          <div v-if="student.modules.length > 0" class="courses-list">
            <ul>
              <li
                v-for="module in student.modules"
                :key="module._id"
                class="d-flex justify-space-between"
                style="text-transform: capitalize"
              >
                {{ module.name }}
                <span>
                  <v-btn icon><v-icon>mdi-minus</v-icon></v-btn>
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
            Fee Balance: {{ student.fee_balance }}
          </h2>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "student details",

  data() {
    return {
      studentId: this.$route.params.studentId,
      status: true,
    };
  },

  computed: {
    ...mapGetters(["students"]),
  },

  methods: {
    updateStatus() {},
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 20px 0 0 280px;
  .student-info {
    width: 50%;
    margin: 10% auto;
    // border: 1px solid grey;
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
