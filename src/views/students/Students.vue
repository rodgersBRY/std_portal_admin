<template>
  <div class="students">
    <header>
      <NavBar />
    </header>

    <main>
      <section class="add-new">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="brown" dark v-bind="attrs" v-on="on">
              <v-icon>mdi-plus</v-icon>
              Add New Student
            </v-btn>
          </template>
      
          <v-card>
            <v-card-title>
              <span class="text-h5">New Student</span>
            </v-card-title>
      
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="student.name"
                        label="Name"
                        :rules="[rules.required]"
                        required
                      ></v-text-field>
                    </v-col>
      
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="student.email"
                        label="Email"
                        :rules="[rules.required, rules.email]"
                        required
                      ></v-text-field>
                    </v-col>
      
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="student.idNo"
                        label="ID Number"
                        :rules="[rules.required]"
                        required
                      ></v-text-field>
                    </v-col>
      
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="student.phone"
                        label="Phone"
                        :rules="[rules.required]"
                        required
                      ></v-text-field>
                    </v-col>
      
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="student.age"
                        label="Age"
                        type="number"
                        :rules="[rules.required]"
                        required
                      ></v-text-field>
                    </v-col>
      
                    <v-col cols="12" sm="6">
                      <v-select
                        v-model="student.gender"
                        :items="['male', 'female']"
                        label="Gender"
                        :rules="[rules.required]"
                        required
                      ></v-select>
                    </v-col>
      
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="student.enrollDate"
                        label="Enroll Date"
                        type="date"
                        :rules="[rules.required]"
                        required
                      ></v-text-field>
                    </v-col>
      
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="8">
                          <v-text-field
                            v-model="module.name"
                            label="Course Name"
                          ></v-text-field>
                        </v-col>
      
                        <v-col cols="4">
                          <v-text-field
                            v-model="module.amount"
                            label="Amount"
                            type="number"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-btn @click="addModule">Add Module</v-btn>
                    </v-col>
                  </v-row>
      
                  <v-divider></v-divider>
      
                  <v-row>
                    <v-col>
                      <v-list>
                        <v-list-item-group>
                          <v-list-item v-for="(mod, index) in student.modules" :key="index">
                            <v-list-item-content>
                              <v-list-item-title>{{ mod.name }}</v-list-item-title>
                              <v-list-item-subtitle>{{ mod.amount | currencyFormatter }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                              <v-btn icon @click="removeModule(index)">
                                <v-icon>mdi-delete</v-icon>
                              </v-btn>
                            </v-list-item-action>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
      
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="saveStudent">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </section>

      <section class="table">
        <div class="search-div">
          <h2>Students</h2>

          <v-spacer />

          <v-text-field
            v-model="search"
            color="brown"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
        </div>

        <v-data-table
          :item-key="students.code"
          :headers="headers"
          :items="students"
          :search="search"
          :loading="isLoading"
          loading-text="Loading... Please wait"
        >
          <template v-slot:item="{ item }">
              <tr @click="handleClick(item)" style="cursor: pointer; font-weight: bold;" :class="{ 'inactive-row' : !item.active }">
                <td>{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.age }}</td>
                <td style="text-transform: capitalize;">{{ item.gender }}</td>
                <td>{{ item.fee_balance | currencyFormatter }}</td>
              </tr>
          </template>
        </v-data-table>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "studentsPage",

  data() {
    return {
      search: "",
      headers: [
        {
          text: "Reg No",
          sortable: false,
          value: "code",
        },
        {
          text: "Full Name",
          sortable: true,
          value: "name",
        },
        {
          text: "Phone Number",
          value: "phone",
          sortable: false,
          filterable: false,
        },
        {
          text: "Email",
          value: "email",
          sortable: false,
          filterable: false,
        },
        {
          text: "Age",
          value: "age",
          sortable: false,
          filterable: false,
        },
        {
          text: "Gender",
          value: "gender",
          sortable: false,
          filterable: false,
        },
        {
          text: "Fee Balance (Ksh)",
          value: "fee_balance",
          filterable: false,
        },
      ],
      dialog: false,
      valid: false,
      student: {
        name: "",
        email: "",
        idNo: "",
        phone: "",
        age: '',
        gender: '',
        enrollDate: '',
        modules: [],
      },
      module: {
        name: "",
        amount: null,
      },
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || 'Invalid email.';
        },
      },
    };
  },

  computed: {
    ...mapGetters(["students", "isLoading", "error", "user"]),
  },

  methods: {
    ...mapActions(['newStudent']),

    handleClick(item) {
      this.$router.push(`/students/${item._id}`)
    },

    addModule() {
      if (this.module.name && this.module.amount) {
        this.student.modules.push({ ...this.module });
        this.module.name = '';
        this.module.amount = null;
      }
    },

    removeModule(index) {
      this.student.modules.splice(index, 1);
    },

    async saveStudent() {
      await this.newStudent(this.student)

      if (!this.error) {
        // reset the form
        this.$refs.form.reset()
        this.student.modules = []
        this.dialog = false
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  background-color: rgb(247, 247, 247);
  padding: 3rem;

  .table,
  .add-new {
    width: 90%;
    margin: 0 auto;
  }

  .add-new {
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-end;
  }

  .v-dialog {
    max-width: 600px;
  }
  
  .v-list-item-title {
    font-weight: bold;
  }
  
  .v-list-item-subtitle {
    color: grey;
  }

  .table {
    border-radius: 15px;
    background-color: white;
    padding: 1.5rem;
    
    .search-div {
      display: flex;
    }
  }

  .inactive-row {
    background-color: #f5f5f5; /* Light grey background */
    color: #999; /* Grey text color */
    font-style: italic
  }
}
</style>
