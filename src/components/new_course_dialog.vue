<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green darken-4" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-plus</v-icon>New Course
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Course Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Course Title*"
              color="brown"
              v-model="title"
              required
            ></v-text-field>
            <v-text-field
              label="Course Fee*"
              color="brown"
              v-model="courseFee"
              required
            ></v-text-field>
            <v-text-field
              label="Unique Code*"
              hint="e.g. JC320"
              color="brown"
              v-model="uniqueCode"
              persistent-hint
              required
            ></v-text-field>
            <br />
            <v-combobox
              v-model="topics"
              :filter="filter"
              hide-selected
              label="Enter a new Topic"
              multiple
              solo
            >
              <template v-slot:selection="{ attrs, item, parent, selected }">
                <v-chip
                  v-if="item === Object(item)"
                  v-bind="attrs"
                  :input-value="selected"
                  label
                  small
                >
                  <span class="pr-2">
                    {{ item.title }}
                  </span>
                  <v-icon small @click="parent.selectItem(item)">
                    $delete
                  </v-icon>
                </v-chip>
              </template>
            </v-combobox>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="closeDialog"> Close </v-btn>
          <v-btn
            color="green darken-1"
            :loading="isLoading"
            text
            @click="saveCourse"
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
  data() {
    return {
      dialog: false,

      title: "",
      courseFee: "",
      uniqueCode: "",
      items: [],
      topics: [],
    };
  },

  computed: {
    ...mapGetters(["isLoading"]),
  },

  watch: {
    topics(val, prev) {
      if (val.length === prev.length) return;

      this.topics = val.map((v) => {
        if (typeof v === "string") {
          v = {
            title: v,
          };
          this.items.push(v);
        }

        return v;
      });
    },
  },

  methods: {
    closeDialog() {
      this.title = "";
      this.courseFee = "";
      this.uniqueCode = "";
      this.topics = [];
      this.items = [];
      this.dialog = false;
    },

    saveCourse() {
      if (
        this.title !== "" ||
        this.courseFee !== "" ||
        this.uniqueCode !== ""
      ) {
        this.dialog = false;

        let courseData = {
          title: this.title,
          fee: this.courseFee,
          uniqueCode: this.uniqueCode,
          topics: this.items,
        };

        this.$store.dispatch("newCourse", courseData);
      } else {
        alert("FIll in all fields before submitting");
      }
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
