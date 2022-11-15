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
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <form @submit.prevent="createStudent" class="new-student-form">
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-text-field
            type="text"
              label="Student Name"
              hint="Jane Doe"
              persistent-hint
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Student Email"
              hint="janedoe@example.com"
              persistent-hint
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-text-field
              label="Student Age"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Student Name"
              hint="Jane Doe"
              persistent-hint
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="12" sm="6">
            <v-text-field
              label="Student Name"
              hint="Jane Doe"
              persistent-hint
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Student Name"
              hint="Jane Doe"
              persistent-hint
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-col>
          <v-text-field
            label="Student Name"
            hint="Jane Doe"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Student Name"
            hint="Jane Doe"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Student Name"
            hint="Jane Doe"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
};
</script>


<style scoped>
.new-student-form {
  width: 50%;
  margin: 3rem auto;
}
</style>