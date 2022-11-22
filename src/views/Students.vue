<template>
  <div class="students">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <v-card flat width="90%" class="pa-5 my-10">
          <v-card-title>
            <h2>Students</h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              color="brown"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
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
                <stud-dialog />
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
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
              <p
                style="cursor: pointer"
                @click="$router.push(`/student-details/${item._id}`)"
              >
                {{ item.name }}
              </p>
            </template>
            <template v-slot:item.fee_balance="{ item }">
              <p :class="[item.fee_balance !== 'Ksh. 0.0' ? 'warning--text' : '']">
                {{ item.fee_balance }}
              </p>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editStudent(item)"
                >mdi-pencil</v-icon
              >
              <v-icon small class="mr-2" @click="deleteStudent(item)"
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
import { mapGetters } from "vuex";

export default {
  name: "students",

  components: {
    "stud-dialog": require("../components/student_dialog_box.vue").default,
  },

  created() {
    this.$store.dispatch("fetchStudents");
  },

  data() {
    return {
      search: "",
      editedIndex: -1,
      dialogDelete: false,
      editedItem: {
        code: "",
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
        code: "",
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
          text: "Code",
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
          text: "Fee Balance",
          value: "fee_balance",
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
    ...mapGetters(["students", "isLoading"]),
  },

  methods: {
    editStudent(student) {
      alert(`editing ${student}`);
    },

    deleteStudent(student) {
      this.editedIndex = this.students.indexOf(student);
      this.editedItem = Object.assign({}, student);
      this.dialogDelete = true;
    },

    confirmDelete() {
      this.$store.dispatch("deleteStudent", this.editedItem._id);
      this.students.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.students {
  main {
    margin-left: 260px;
    .v-card {
      margin: auto;
    }
  }
}
</style>
