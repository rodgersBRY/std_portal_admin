<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" dark v-bind="attrs" v-on="on"> Add Sudent </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="green">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>New Student</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items> </v-toolbar-items>
      </v-toolbar>
      <form @submit.prevent="createStudent" class="new-student-form">
        <h1 class="mb-5 text-center">Enter Student Information</h1>
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-text-field
              type="text"
              label="Student Name"
              hint="e.g. Jane Doe"
              persistent-hint
              outlined
              color="brown"
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Student Email"
              hint="e.g. janedoe@example.com"
              persistent-hint
              outlined
              color="brown"
              v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-text-field
              label="Age"
              outlined
              color="brown"
              v-model="age"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Phone Number"
              hint="e.g. 254712345678"
              persistent-hint
              outlined
              color="brown"
              v-model="phone"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-select
              :items="genderItems"
              label="Gender"
              outlined
              color="brown"
              v-model="gender"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="roleItems"
              label="Role"
              outlined
              color="brown"
              v-model="role"
            ></v-select>
          </v-col>
        </v-row>
        <br />
        <v-text-field
          label="Student Code"
          hint="e.g. JWM-001"
          persistent-hint
          outlined
          color="brown"
          v-model="code"
        ></v-text-field>
        <br />
        <v-text-field
          label="Fee Balance"
          outlined
          color="brown"
          disabled
          v-model="fee_balance"
        ></v-text-field>

        <v-btn dark block color="brown" @click="newStudent"> Save </v-btn>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      genderItems: ["Male", "Female"],
      roleItems: ["Instructor", "Student"],

      code: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      role: "",
      fee_balance: 0,
      age: "",
    };
  },

  computed: {
    ...mapGetters(["students"]),
  },

  methods: {
    async newStudent() {
      let student = {
        name: this.name,
        code: this.code,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        role: this.role,
        fee_balance: this.fee_balance,
        age: this.age,
      };

      await this.$store.dispatch("newStudent", student);
      this.dialog = false;
      this.students.unshift(student);
    },
  },
};
</script>

<style scoped>
.new-student-form {
  width: 50%;
  margin: 3rem auto;
}
</style>
