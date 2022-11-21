<template>
  <div id="student-details">
    <sidenav />

    <main v-for="student in students" :key="student._id">
      <div v-if="student._id === studentId">
        <p>{{ student }}</p>
        <h1>{{ student.name }}</h1>
        <p>
          <em>{{ student.email }}</em>
        </p>
        <p>{{ student.phone }}</p>

        <ul>
          <li v-for="module in student.modules" :key="module._id">
            {{ module.name }}
          </li>
        </ul>

        <h2
          :class="[student.fee_balance > 0 ? 'warning--text' : 'success--text']"
        >
          Fee Balance: {{ student.fee_balance }}
        </h2>
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
    };
  },

  computed: {
    ...mapGetters(["students"]),
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 20px 0 0 280px;
}
</style>
