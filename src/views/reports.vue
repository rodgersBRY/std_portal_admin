<template>
  <div id="reports">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="summary-table">
        <div class="interval-select">
          <label for="Filter"></label>
          <label for="cars">Choose Interval: </label>

          <select name="filter" v-model="filterVal" @change="onChangeMethod">
            <option :value="false" selected>All</option>
            <option :value="true">Last Month</option>
          </select>
        </div>
cd 
        <div class="divider"></div>

        <div v-if="filterVal">
          <table border="1" cellpadding="3" class="table">
            <tbody>
              <tr>
                <th>Total Students</th>
                <th>Total Amount Paid (Ksh)</th>
                <th>Total Amount Payable (Ksh)</th>                
                <th>Balance (Ksh)</th>
              </tr>
              <tr>
                <td>{{ studentsSummary.totalStudents }}</td>
                <td>{{ studentsSummary.totalAmountPaid | currencyFormatter }}</td>
                <td>{{ studentsSummary.totalAmountPayable | currencyFormatter }}</td>                
                <td>
                  {{
                    studentsSummary.totalAmountPayable -
                    studentsSummary.totalAmountPaid | currencyFormatter
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-else>
          <table border="1" cellpadding="3" class="table">
            <tbody>
              <tr>
                <th>Total Students</th>
                <th>Total Amount Paid</th>
                <th>Total Amount Payable</th>
                <th>Balance</th>
              </tr>
              <tr>
                <td>{{ allStudentsSummary.totalStudents }}</td>
                <td>{{ allStudentsSummary.totalAmountPaid | currencyFormatter }}</td>
                <td>{{ allStudentsSummary.totalAmountPayable | currencyFormatter }}</td>
                <td>
                  {{
                    allStudentsSummary.totalAmountPayable -
                    allStudentsSummary.totalAmountPaid | currencyFormatter
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "prevMonthStudents",
      "students",
      "isLoading",
      "studentsSummary",
    ]),



    allStudentsSummary() {
      let totalStudents = this.students.length;
      let totalAmountPaid = 0;
      let totalAmountPayable = 0;

      for (let student of this.students) {
        totalAmountPaid += student.amount_paid;
        totalAmountPayable += student.amount_payable;
      }

      return {
        totalStudents,
        totalAmountPaid,
        totalAmountPayable
      };
    },
  },

  created() {
    this.$store.dispatch("fetchPrevMonthStudents");
  },

  data() {
    return {
      search: "",
      filterVal: false,
     
    };
  },

  methods: {
    onChangeMethod() {
      this.filterVal == !this.filterVal;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  margin-left: 100px;

  .summary-table {
    width: 60%;
    margin: 4rem auto;
    position: relative;
    .interval-select {
      position: absolute;
      right: 10px;
      select {
        padding: 10px;
        background: #cbf3d5;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }

    .divider {
      height: 80px;
    }

    .table {
      border-collapse: collapse;
      width: 100%;
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background: var(--primary-color);
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
  }
}
</style>
