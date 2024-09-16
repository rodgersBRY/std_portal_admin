<template>
  <div id="student-details">
    <header>
      <NavBar />
    </header>

    <main>
      {{ student }}
      
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import EditUser from '../components/edit-user.vue';

export default {
  name: "student-details",
  data() {
    return {
      
    };
  },

  computed: {
    ...mapGetters(["student", "isLoading", "error", "user"]),
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
    ...mapActions(['setError', 'clearError']),

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

    async updateFee() {
      if(this.amount == '') {
        this.dialogUpdate = false;
        this.setError('Enter amount before submitting')
      } else {
        let updateData = {
          id: this.studentId,
          amount: this.amount,
        };

        await this.$store.dispatch("updateStudentFee", updateData);
        this.$store.dispatch("fetchStudents");
        this.amount = "";
        this.dialogUpdate = false;
      }      
    },

    async enrollStudent() {
      if(this.course == '') {
        this.dialogEnroll = false;
        this.setError('Select an option before submitting')
      } else {
        let payload = {
          studentId: this.studentId,
          moduleName: this.course,
        };

        await this.$store.dispatch("enrollStudentToCourse", payload);
        this.course = "";
        this.dialogEnroll = false;
        this.$router.push("/students");
      }      
    },

    resetError() {
      this.clearError()
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: rgb(247, 247, 247);
  padding: 3rem;
}
</style>
