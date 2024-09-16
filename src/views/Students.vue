<template>
  <div class="students">
    <header>
      <NavBar />
    </header>

    <main>
      <section class="add-new">
        <v-btn dark color="brown">
          <v-icon>mdi-plus</v-icon>
          New Student
        </v-btn>
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
              <tr @click="handleClick(item)">
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
import { mapGetters } from "vuex";

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
    };
  },

  computed: {
    ...mapGetters(["students", "isLoading", "error", "user"]),
  },

  methods: {
    handleClick(item) {
      this.$router.push(`/students/${item._id}`)
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
    width: 70%;
    margin: 0 auto;
  }

  .add-new {
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-end;
  }

  .table {
    border-radius: 15px;
    background-color: white;
    padding: 1.5rem;
    
    .search-div {
      display: flex;
    }
  }
}
</style>
