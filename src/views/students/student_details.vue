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
            <br v-if="editing">
            <p style="font-size: 22px;"><strong><span><v-icon>mdi-registered-trademark</v-icon></span>{{ student.code }}</strong></p>
            <p v-if="!editing"><span><v-icon>mdi-id-card</v-icon></span>ID No: {{ student.idNo }}</p>
            <p v-else><v-icon>mdi-id-card</v-icon><input type="number" name="id" id="id" :placeholder="editedStudent.idNo" v-model="editedStudent.idNo" /></p>

            <p class="inactive-text" v-if="!student.active">DEACTIVATED</p>
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
                <p style="text-transform: capitalize;">{{ item.name }}</p>
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
      
      <section class="actions" v-if="student.active">
        <h2>Quick Actions</h2>

        <div v-if="editing">
          <button class="btn edit-btn" @click="saveUpdates" :disabled="isLoading">Save Info</button>
          <button class="btn print-btn" @click="toggleEditing" :disabled="isLoading">Cancel</button>
        </div>

        <div v-else>
          <button class="btn edit-btn" @click="toggleEditing">Edit Student</button>
          <button class="btn enroll-btn" @click="isEnroll = true">Enroll</button>
          <button class="btn update-btn" @click="feeDialog = true">Update Fee</button>
          <v-spacer />
          <button v-if="student.active" class="btn delete-btn" @click="deactivateDialog = true">Deactivate Student</button>
        </div>
      </section>

      <section v-if="success" class="success-message">
        <p v-html="successMessage"></p>
      </section>

      <section v-if="error" class="error-message">
        <p>{{ error }}</p>
      </section>

      <section class="enroll" v-if="isEnroll">
        <h2>New Course</h2>

        <div>
          <p for="name">Name</p>
          <input type="text" name="name" id="name" class="mb-5" placeholder="e.g. roasting" v-model="module.name" />
          <p for="fee">Course Fee</p>
          <input type="number" name="fee" id="fee" placeholder="e.g. 50000" v-model="module.amount" />

          <button class="btn enroll" :disabled="isLoading" @click="enrollStudent">Enroll</button>
          <button class="btn cancel" :disabled="isLoading" @click="closeEnroll">Close</button>
        </div>
      </section>

      <v-dialog v-model="feeDialog" max-width="500">
        <v-card>
          <v-card-title class="text-h5">Enter a Number</v-card-title>
  
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="amount"
                label="Amount"
                type="number"
                outlined
                required
                color="brown"
                :rules="numberRules"
              ></v-text-field>

              <v-textarea
                v-model="desc"
                label="Description"
                type="text"
                outlined
                color="brown"
                placeholder="Mode of payment and transaction code"
              ></v-textarea>

              <div>
                <input v-model="printOption" type="checkbox" name="printOption" id="printOption" />
                <p><strong>Print receipt?</strong></p>
              </div>
            </v-form>
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" text dark @click="closeFeeDialog" :disabled="isLoading">Cancel</v-btn>
            <v-btn color="green darken-2" dark @click="updateFee" :loading="isLoading" :disabled="isLoading">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="deactivateDialog" max-width="400px">
        <!-- <template v-slot:activator="{ on, attrs }">
          <button color="red" dark v-bind="attrs" v-on="on">
            Deactivate Student
          </button>
        </template> -->
    
        <v-card>
          <v-card-title class="headline justify-center">Confirm Deactivation</v-card-title>
    
          <v-card-text>
            Are you sure you want to deactivate <strong>{{ student.name }}</strong>?
            <v-alert type="warning" class="mt-3">
              It's good practice to deactivate instead of deleting records for auditing purposes
            </v-alert>
          </v-card-text>
    
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" text @click="deactivateDialog = false">Cancel</v-btn>
            <v-btn color="red darken-2" text @click="confirmDeactivation">Deactivate</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <section class="activity">
        <h2>Activity Log</h2>

        <div class="activity-div">
          <v-data-table
          :item-key="student.activity.ts"
          :headers="headers"
          :items="student.activity"
          loading-text="Loading... Please wait"
        >
        <template v-slot:item="{ item }">
          <tr @click="handleClick(item)">
            <td>{{ item.title }}</td>
            <td>{{ item.value }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.ts | dateFormat }}</td>
            <td>
              <v-btn icon  v-if="item.title == 'Fee Payment'">
                <v-icon>mdi-printer</v-icon>
              </v-btn>
            </td>
          </tr>
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
      amount: null,
      desc: "",
      editing: false,
      success: false,
      isEnroll: false,
      successMessage: "",
      feeDialog: false,
      deactivateDialog: false,
      printOption: false,
      module: {
        name: "",
        amount: ""
      },

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
        {
          text: "Actions",
          sortable: false,
          filterable: false,
        },
      ],

      editedStudent: {
        name: "",
        email: "",
        phone: "",
        idNo: null,
      },

      numberRules: [
        v => !!v || 'Number is required',
        v => (v && v > 0) || 'Number must be positive',
      ],
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
    ...mapActions(['updateStudent', 'updateStudentFee', 'enrollStudentToCourse', 'deactivateStudent']),

    toggleEditing() {
      this.editing = !this.editing;
    },

    closeEnroll() {
      this.isEnroll = false
      this.module = {
        name: "",
        amount: "",
      }
    },

    closeFeeDialog() {
      this.amount = null;

      this.feeDialog = false
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

    async saveUpdates() {
      const data = {
        ...this.editedStudent,
        userId: this.student._id,
      };

      await this.updateStudent(data);

      if (!this.error) {
        this.success = true
        this.successMessage = "Student Information has been updated. Give it a few seconds to refresh..."

        setTimeout(() => {
          this.success = false;
          this.successMessage = ""
          this.toggleEditing();
          location.reload()
        }, 2000);
      }
    },

    async updateFee() {
      await this.updateStudentFee({
        id: this.student._id,
        amount: this.amount,
        desc: this.desc,
        printOption: this.printOption,
      });

      if (!this.error) {
        this.amount = "";
        this.desc = "";
        
        this.success = true;
        this.successMessage = "Fee payment has been recorded";

        setTimeout(() => {
          this.success = false;
          this.successMessage = "";
          location.reload();
        }, 3000);  
      }
      this.feeDialog = false;
    },

    async enrollStudent() {
      let payload = {
        id: this.student._id,
        module: this.module,
      };

      await this.enrollStudentToCourse(payload);

      if (!this.error) {
        this.success = true
        this.successMessage = "The course has been added to student information"
        this.isEnroll = false

        setTimeout(() => {
          this.success = false;
          this.successMessage = "";
          this.module = {
            name: "",
            amount: ""
          };
          location.reload();
        }, 2000);        
      }
    },

    async confirmDeactivation() {
      await this.deactivateStudent(this.student._id)

      if (!this.error) {
        this.deactivateDialog = false
        this.success = true
        this.successMessage = `<strong>${this.student.name}</strong> has been deactivated`

        setTimeout(() => {
          this.success = false;
          this.successMessage = "";
          
          location.reload();
        }, 2000);  
      }
    }
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
  .activity,
  .enroll {
    width: 90%;
    margin: 0 auto;
  }

  h2 {
    margin: 1rem 0;
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

  .inactive-text {
    font-weight: bold;
    font-size: 30px;
    color: orange;
    font-style: italic;
  }

  .success-message p {
    width: 90%;
    margin: 1rem auto;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(204, 253, 204);
    padding: 5px 10px;
    border-left: 4px solid green;
    color: green;
  }

  .error-message p {
    width: 90%;
    margin: 1rem auto;
    font-size: 14px;
    font-weight: bold;
    color: red;
    background-color: rgb(255, 191, 191);
    padding: 5px 10px;
    border-left: 4px solid red;
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
            color: white;
            margin-right: 3rem;
            padding: 10px;
            border-radius: 10px;
            background-color: rgb(136, 127, 127);
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
    background-color: white;
    border-radius: 15px;
    padding: 2rem;
    .btn {
      font-size: 16px;
      height: 60px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 0 15px;
      border-radius: 10px;
      color: white;
      transition: all .2s ease-in-out;
      &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      }
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

  .enroll div {
    background-color: white;
    border-radius: 15px;
    padding: 2rem;
    button {
      height: 50px;
      width: 100px;
      margin: 1rem 10px 0 0;
      padding: 5px;
      border-radius: 10px;
      color: white;
      font-weight: bold;
    }
    .enroll {
      background-color: green;
    }
    .cancel {
      background-color: grey;
    }
  }

  .activity {
    .activity-div {
      background-color: white;
      border-radius: 15px;
      padding: 2rem;
    }
  }

  .schoolOptions {
    display: flex;
    gap: 1rem;
    font-weight: bold;
  }
}
</style>
