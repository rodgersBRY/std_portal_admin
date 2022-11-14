<template>
  <div class="students">
    <header>
      <sidenav />
    </header>

    <main>
      <section class="content">
        <v-card width="90%" class="pa-5 mt-10">
          <v-card-title>
            Students
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="students.data"
            :search="search"
          >
          </v-data-table>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchStudents");
  },

  data() {
    return {
      search: "",
      headers: [
        {
          text: "Code",
          sortable: false,
          value: "code",
          groupable: false,
        },
        {
          text: "Full Name",
          sortable: true,
          value: "name",
          groupable: false,
        },
        {
          text: "Phone Number",
          value: "phone",
          sortable: false,
          filterable: false,
          groupable: false,
        },
        {
          text: "Email",
          value: "email",
          sortable: false,
          filterable: false,
          groupable: false,
        },
        {
          text: "Age",
          value: "age",
          sortable: false,
          filterable: false,
          groupable: false,
        },
        {
          text: "Gender",
          value: "gender",
          sortable: false,
          filterable: false,
          groupable: false,
        },
        {
          text: "Fee Balance",
          value: "fee_balance",
          sortable: false,
          filterable: false,
          groupable: false,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["students"]),
  },

  methods: {
    // getColor(status) {
    //   if (status === true) return "grey";
    //   else return "green";
    // },
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
