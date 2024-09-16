<template>
  <div class="home">
    <header>
      <NavBar />
    </header>

    <main>
      <h1>Jowam Dashboard</h1>

      <section class="cards">
        <div class="card" @click="$router.push('/students')">
          <v-icon size="80" color="brown">mdi-account-school</v-icon>
          <p>Students <span class="grey--text">({{ students.length }})</span></p>
        </div>

        <div class="card">
          <v-icon size="80" color="brown">mdi-chart-multiple</v-icon>
          <p>Reports</p>
        </div>
      </section>

      <h2>Recent Students</h2>

      <section class="reports">
        <p class="details">A list of students with a significant balance</p>
        <div class="table">
          <v-data-table
            :item-key="filteredStudents.code"
            :headers="headers"
            :items="filteredStudents"
            :search="searchText"
            :loading="isLoading"
            :items-per-page="5"
            loading-text="Loading... Please wait"
          >
          <template v-slot:item="{ item }">
            <tr @click="handleClick(item)">
              <td>{{ item.code }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.fee_balance | currencyFormatter }}</td>
            </tr>
          </template>
          </v-data-table>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "Home",

  data() {
    return {
      searchText: "",
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
    ...mapGetters(['students', 'isLoading', 'user']),

    filteredStudents() {
      return this.students.filter(student => student.fee_balance > 20000);
    }
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
  height: 100vh;
  .cards,
  .reports {
    background-color: white;
    border-radius: 10px;
    padding: 3rem;
  }

  .cards {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    .card {
      border: 2px solid rgb(215, 215, 215);
      width: 300px;
      height: 150px;
      padding: 10px 2rem;
      border-radius: 10px;
      font-size: 22px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .details {
    font-size: 13px;
    font-weight: bold;
    color: grey;
  }
  h2 {
    margin: 2rem 1rem;
  }
}
</style>
