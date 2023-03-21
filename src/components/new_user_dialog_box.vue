<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="brown" dark v-bind="attrs" v-on="on"> Add User </v-btn>
    </template>

    <v-card>
      <v-toolbar dark color="green">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title>New User</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items> </v-toolbar-items>
      </v-toolbar>

      <form @submit.prevent="createUser" class="new-student-form">
        <h1 class="mb-5 text-center">
          Enter
          {{ userType[0] }} information
        </h1>
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-text-field
              type="text"
              label="Full Name"
              hint="e.g. Jane Doe"
              persistent-hint
              outlined
              color="brown"
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Email"
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
              :items="userType"
              label="Role"
              outlined
              color="brown"
              v-model="role"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <p>Enrollment Date: {{enrollDate}} </p>
          <v-spacer></v-spacer>
        <v-date-picker
          v-model="enrollDate"
          color="green"
          
        >
         </v-date-picker>
        </v-row>
        
        <br />
        <v-combobox
          outlined
          color="brown"
          v-model="course"
          label="Select Courses"
          :items="courseNames"
          multiple
        >
          <template v-slot:selection="{ attrs, item, parent, selected }">
            <v-chip v-bind="attrs" :input-value="selected" label small>
              <span class="pr-2">
                {{ item }}
              </span>
              <v-icon small @click="parent.selectItem(item)"> $delete </v-icon>
            </v-chip>
          </template>
        </v-combobox>

        <v-btn
          dark
          block
          color="brown"
          class="mt-10"
          @click="newUser"
          @keyup.enter="newUser"
          :loading="isLoading"
        >
          Save
        </v-btn>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["userType", "user"],

  data() {
    return {
      dialog: false,
      genderItems: ["Male", "Female"],

      name: "",
      role: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
      enrollDate: null,
      course: [],     
    };
  },

  computed: {
    ...mapGetters(["isLoading", "courses", "error"]),

    courseNames() {
      let courses = [];
      for (let course of this.courses) {
        courses.push(course.name);
      }
      return courses;
    },
  },

  methods: {
    async newUser() {
      if (
        this.name !== "" ||
        this.gender !== "" ||
        this.phone !== "" ||
        this.email !== "" ||
        this.age !== ""
      ) {
        let user = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          role: this.role,
          age: this.age,
          modules: this.course,
          enrollDate: this.enrollDate,
        };

        if (this.role === "student") {
          await this.$store.dispatch("newStudent", user);
          this.$store.dispatch("fetchStudents");
        } else {
          await this.$store.dispatch("newInstructor", user);
          this.$store.dispatch("fetchInstructors");
        }
        // clear the fields
        this.name = "";
        this.email = "";
        this.phone = "";
        this.gender = "";
        this.role = "";
        this.age = ""; 
        this.course = "";

        this.dialog = false;
      } else {
        alert("Cannot submit empty fields");
      }
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
