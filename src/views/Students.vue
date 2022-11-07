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
            :items="students"
            :search="search"
          ></v-data-table>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
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
        { text: "Phone Number", value: "phone", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Age", value: "age", sortable: true },
        { text: "Gender", value: "gender", sortable: false },
      ],
      students: [
        {
          code: "JWM-020",
          name: "Brian Mawira",
          email: "brian@mail.com",
          phone: "0712413243",
          age: 25,
          gender: "male",
        },
        {
          code: "JWM-021",
          name: "Justin Mawira",
          email: "justin@mail.com",
          phone: "0710411857",
          age: 23,
          gender: "male",
        },
        {
          code: "JWM-012",
          name: "Nyla Makena",
          email: "nyla@make.com",
          phone: "0711367888",
          age: 20,
          gender: "female",
        },
        {
          code: "JWM-233",
          name: "Evelyn Njoki",
          email: "evelyn@njoki.com",
          phone: "254711234553",
          age: 27,
          gender: "female",
        },
      ],
    };
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
