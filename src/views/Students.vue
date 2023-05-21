<template>
  <div class="students">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <!-- error dialog -->
        <error-dialog :display="error" @close-dialog="resetError" :error-text="error"></error-dialog>

        <v-card flat class="pa-1">
          <v-card-title>
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
          </v-card-title>
          <h2 class="my-6 ml-3 grey--text">
            Students In Attendance:
            <span class="blue--text">
              {{ attendanceCount }}
            </span>
          </h2>
          <v-data-table
            :item-key="students.code"
            :headers="headers"
            :items="students"
            :search="search"
            :loading="isLoading"
            loading-text="Loading... Please wait"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-spacer />

                <user-dialog :userType="['student']" />
                
                <v-dialog v-model="dialogDelete" width="600px">
                  <v-card width="100%">
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn color="green darken-1" text @click="confirmDelete"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.name="{ item }">
              <div
                style="
                  cursor: pointer;
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                "
                @click="$router.push(`/student-details/${item._id}`)"
              >
                {{ item.name }}
              </div>
            </template>
            <template v-slot:item.fee_balance="{ item }">
              <p :class="[item.fee_balance != '0' ? 'warning--text' : '']">
                {{ item.fee_balance }}
              </p>
            </template>
            <template v-slot:item.checkedIn="{ item }">
              <div v-if="item.checkedIn">In class</div>
              <div v-else class="grey--text">--</div>
            </template>
            <template v-if="user.role == 'admin'" v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                color="red"
                @click="removeStudent(item)"
                >mdi-delete</v-icon
              >
            </template>
          </v-data-table>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "students",

  components: {
    "user-dialog": require("../components/new_user_dialog_box.vue").default,
  },

  created() {
    this.$store.dispatch("fetchTotalAttendance");
  },

  data() {
    return {
      search: "",
      editedIndex: -1,
      dialogDelete: false,
      editedItem: {
        _id: "",
        name: "",
        age: "",
        phone: "",
        gender: "",
        role: "",
        modules: [],
        fee_balance: 0,
        status: false,
      },
      defaultItem: {
        name: "",
        age: "",
        phone: "",
        gender: "",
        role: "",
        modules: [],
        fee_balance: 0,
        status: false,
      },
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
        {
          text: "Attendance",
          value: "checkedIn",
          sortable: true,
          filterable: false,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          filterable: false,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["students", "isLoading", "error", "attendanceCount", "user"]),
  },

  methods: {
    ...mapActions(["deleteStudent", "clearError"]),

    removeStudent(student) {
      this.editedIndex = this.students.indexOf(student);
      this.editedItem = Object.assign({}, student);
      this.dialogDelete = true;
    },

    confirmDelete() {
      this.deleteStudent(this.editedItem._id);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    resetError() {
      this.clearError();
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1000px) {
  .v-card {
    width: 80%;
  }
}
.students {
  main {
    margin-left: 60px;
    .v-card {
      margin: auto;
    }
  }
}
</style>
