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
            <p v-if="!editing" class="name display-1 capitalize"><strong>{{ student.name }}</strong></p>
            <input v-else type="text" name="name" id="name" :placeholder="student.name" v-model="editedStudent.name" />
            <p style="font-size: 22px;"><strong><span><v-icon>mdi-registered-trademark</v-icon></span>{{ student.code }}</strong></p>
            <p v-if="!editing"><span><v-icon>mdi-id-card</v-icon></span>ID No: {{ student.idNo }}</p>
            <p v-else><v-icon>mdi-id-card</v-icon><input type="number" name="id" id="id" :placeholder="editedStudent.idNo" v-model="editedStudent.idNo" /></p>
          </div>

          <div>
            <p v-if="student.email && !editing"><span><v-icon>mdi-email</v-icon></span> {{ student.email }}</p>
            <span v-else><v-icon>mdi-email</v-icon>
              <input type="email" name="email" id="email" :placeholder="editedStudent.email" v-model="editedStudent.email" />
            </span>
            <br v-if="editing">
            <p v-if="!editing"><span><v-icon>mdi-phone</v-icon></span> {{ student.phone }}</p>
            <p v-else>
              <span><v-icon>mdi-phone</v-icon>
                <input type="phone" name="phone" id="phone" :placeholder="editedStudent.phone" v-model="editedStudent.phone" />
              </span>
            </p>
            <p><span><v-icon>mdi-gender-male-female</v-icon></span> {{ student.gender }}</p>
            <p>
              <span><v-icon>mdi-counter</v-icon></span> {{ student.age }} years
            </p>
          </div>
        </div>
      </section>

      <section v-if="!editing" class="school-money">
        <div class="school-info">
          <h2>School Information</h2>

          <div class="info-div">
            <p>Date of Enrollment</p>
            <p>{{ student.enrollDate | dateFormat }}</p>
            <div class="modules-div">
              <h3>Courses Enrolled</h3>
              <div class="module mt-3" v-for="(item, index) in student.modules" :key="index">
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

      <section v-if="success" class="success-message">
        <p>Student Information has been updated. Give it a few seconds to refresh...</p>
      </section>
      
      <section class="actions">
        <h2>Quick Actions</h2>

        <div v-if="editing">
          <button class="btn edit-btn" @click="saveUpdates" :disabled="isLoading">Save Info</button>
          <button class="btn print-btn" @click="toggleEditing" :disabled="isLoading">Cancel</button>
        </div>

        <div v-else>
          <button class="btn edit-btn" @click="toggleEditing">Edit Student</button>
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
      editing: false,
      success: false,
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
      editedStudent: {
        name: "",
        email: "",
        phone: "",
        idNo: null,
      }
    };
  },

  computed: {
    ...mapGetters(["student", "isLoading", "error"]),
  },

  mounted() {
    this.editedStudent.name = this.student.name;
    this.editedStudent.email = this.student.email;
    this.editedStudent.phone = this.student.phone;
    this.editedStudent.idNo = this.student.idNo;
  },

  methods: {
    ...mapActions(['updateStudent', 'updateStudentFee', 'enrollStudentToCourse']),

    toggleEditing() {
      this.editing = !this.editing;
    },

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

    async saveUpdates() {
      const data = {
        ...this.editedStudent,
        userId: this.student._id,
      };

      await this.updateStudent(data);

      if (!this.error) {
        this.success = true

        setTimeout(() => {
          this.success = false;
          this.toggleEditing();
          location.reload()
        }, 2000);
      }
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

  input {
    border: 2px solid rgb(186, 186, 186);
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }

  .success-message p {
    font-size: 14px;
    font-weight: bold;
    color: green;
    background-color: rgb(204, 253, 204);
    padding: 5px 10px;
    border-left: 4px solid green;
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
      flex: 2;
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
      flex: 1;
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
