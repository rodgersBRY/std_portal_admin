<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed text color="green darken-4" dark v-bind="attrs" v-on="on" style="position: absolute; right: 0;">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Full Name*"
              color="brown"
              v-model="form.name"
              required
            ></v-text-field>
            <v-text-field
              label="Email Address"
              color="brown"
              v-model="form.email"
              required
            >
            </v-text-field>
            <v-text-field
              label="Phone Number"
              color="brown"
              v-model="form.phone"
              required
            ></v-text-field>
            <v-text-field
              label="Age"
              color="brown"
              v-model="form.age"
              required
            >
            </v-text-field>
            <v-switch label="Edit Fee Balance?" color="green" v-model="editFee"></v-switch>

            <v-text-field v-if="editFee"
              label="Fee Balance"
              color="brown"
              v-model="form.fee_balance"
              required
            >
            </v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeDialog" :loading="isLoading">
            Close
          </v-btn>
          <v-btn
            color="green darken-1"
            :loading="isLoading"
            text
            @click="saveUpdates"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["user"],

  data() {
    return {
      dialog: false,
      editFee: false,
      form: this.user ?  {_id:this.user._id, ...this.user }  : {
        name: "",
        age: "",
        email: "",
        phone: "",
        fee_balance: ""   
      }
    };
  },

  computed: {
    ...mapGetters(["isLoading"]),
  },

  methods: {
    closeDialog() {
      this.form = {}
      this.dialog = false;
    },

    async saveUpdates() {
        this.dialog = false;

        await this.$store.dispatch("updateStudent", {userId: this.user._id, ...this.form});
        this.$store.dispatch("fetchStudents");
    },

    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.editingIndex = index;
      } else {
        this.editing = null;
        this.editingIndex = -1;
      }
    },

    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = (val) => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return (
        text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) >
        -1
      );
    },
  },
};
</script>
