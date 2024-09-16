<template>
  <div id="student-details">
    <header>
      <NavBar />
    </header>

    <main>
      <section class="personal-info">
        <h2>Personal Information</h2>
        <div class="info-div">
          <div>
            <p class="name display-1 capitalize"><strong>{{ student.name }}</strong></p>
            <p style="font-size: 22px;"><strong><span><v-icon>mdi-registered-trademark</v-icon></span>{{ student.code }}</strong></p>
            <p><span><v-icon>mdi-id-card</v-icon></span>ID No: {{ student.idNo }}</p>
          </div>

          <div>
            <p v-if="student.email"><span><v-icon>mdi-email</v-icon></span> {{ student.email }}</p>
            <p><span><v-icon>mdi-phone</v-icon></span> {{ student.phone }}</p>
            <p><span><v-icon>mdi-gender-male-female</v-icon></span> {{ student.gender }}</p>
            <p><span><v-icon>mdi-counter</v-icon></span> {{ student.age }} years</p>
          </div>
        </div>
      </section>

      <section class="school-money">
        <div class="school-info">
          <h2>School Information</h2>

          <div class="info-div">
            <p>Date of Enrollment</p>
            <p>{{ student.enrollDate | dateFormat }}</p>
            <div class="modules-div">
              <h3>Courses Enrolled</h3>
              <div class="module" v-for="(item, index) in student.modules" :key="index">
                <p>{{ item.name }}</p>
                <p>KES {{ item.amount | currencyFormatter }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="money-info">
          <h2>Fee Information</h2>

          <div class="info-div">
            <p>Fee Balance:</p>
            <p class="amount">KES {{ student.fee_balance | currencyFormatter }}</p>
            <p>Amount Paid:</p>
            <p class="amount">KES {{ student.amount_paid | currencyFormatter }}</p>
            <p>Total Fee:</p>
            <p class="amount">KES {{ student.amount_payable | currencyFormatter}}</p>
          </div>          
        </div>
      </section>
      
      <section class="actions">
        <h2>Quick Actions</h2>

        <div>
          <button class="btn edit-btn">Edit Student</button>
          <button class="btn enroll-btn">Enroll</button>
          <button class="btn update-btn">Update Fee</button>
          <button class="btn print-btn">Print Receipt</button>
          <v-spacer />
          <button class="btn delete-btn">Delete Student</button>
          
        </div>
      </section>

      <section class="activity">
        <h2>Activity Log</h2>

        <div class="activity-div">
          <v-data-table
          :item-key="student.activity.ts"
          :headers="headers"
          :items="student.activity"
          loading-text="Loading... Please wait"
        >
          <template v-slot:item.ts="{ item }">
            <p>{{ item.ts | dateFormat }}</p>
          </template>
        </v-data-table>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "student-details",
  data() {
    return {
      amount: "",
      module: {
        name: "",
        amount: ""
      },
      modules: [],
      headers: [
        {
          text: "Title",
          sortable: false,
          value: "title",
          filterable: false,
        },
        {
          text: "Description",
          sortable: false,
          value: "value",
          filterable: false,
        },
        {
          text: "Amount",
          value: "amount",
          sortable: false,
          filterable: false,
        },
        {
          text: "Timestamp",
          value: "ts",
          sortable: false,
          filterable: false,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["student", "isLoading", "error"]),
  },

  methods: {
    ...mapActions(['updateStudentFee', 'enrollStudentToCourse']),

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

    addModule() {
      this.modules.push(this.module);
    },

    removeModule(index) {
      this.modules.splice(index, 1)
    },

    async updateFee() {
      await this.updateStudentFee({
        id: this.student._id,
        amount: this.amount
      });

      if (!this.error) {
        // fetch student details again
        this.amount = "";
      }
    },

    async enrollStudent() {
      let payload = {
        id: this.student._id,
        modules: this.modules,
      };

      await this.enrollStudentToCourse(payload);

      if (!this.error) {
        this.module = {
          name: "",
          amount: ""
        };
        this.modules =[]    
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: rgb(247, 247, 247);
  padding: 3rem;
  .personal-info,
  .school-money,
  .actions,
  .activity {
    width: 90%;
    margin: 0 auto;
  }
  .personal-info {
    .info-div {
      display: flex;
      gap: 3rem;
      background-color: white;
      padding: 2rem;
      margin: 1rem 0;
      border-radius: 15px;
      div {
        width: 50%;
        border: 2px solid rgb(231, 231, 231);
        border-radius: 15px;
        padding: 20px;
        font-weight: bold;
        color: rgb(75, 75, 75);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  .school-money {
    display: flex;
    gap: 2rem;
    .school-info,
    .money-info {
      width: 50%;
      .info-div {
        background-color: white;
        padding: 2rem;
        margin: 1rem 0;
        border-radius: 15px;
        color: rgb(75, 75, 75);
      }
    }
    .school-info {
      .info-div {
        & > p:first-child {
          font-size: 20px;
          font-weight: bold;
        }
        .modules-div {
          h3 {
            margin-bottom: 20px;
          }
          .module {
            display: inline-block;
            width: 200px;
            font-weight: bold;
            color: rgb(75, 75, 75);
            margin-right: 3rem;
            padding: 10px;
            border-radius: 10px;
            background-color: rgb(244, 244, 244);
          }
        }
      }
    }
    .money-info {
      .info-div {
        p {
          font-weight: bold;
          margin: 0;
        }
        .amount {
          font-size: 30px;
          margin-bottom: 10px;
        }
      }
    }
  }
  
  .actions div {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    background-color: white;
    border-radius: 15px;
    padding: 2rem;
    .btn {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.3);
      color: white;
    }
    .edit-btn {
      background-color: green;
    }
    .enroll-btn {
      background-color: brown;
    }
    .delete-btn {
      background-color: red;
    }
    .update-btn {
      background-color: orange;
    }
    .print-btn {
      background-color: grey;
    }
  }
  .activity {
    h2 {
      margin: 1rem 0;
    }
    .activity-div {
      background-color: white;
      border-radius: 15px;
      padding: 2rem;
    }
  }
}
</style>
