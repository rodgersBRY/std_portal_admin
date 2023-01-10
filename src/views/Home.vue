<template>
  <div class="home">
    <header>
      <sidenav />
    </header>

    <main>
      <h1>Dashboard</h1>

      <section class="categories">
        <v-card class="category" v-for="(cat, i) in categories" :key="i">
          <v-img width="100%" height="200px" :src="cat.img"> </v-img>
          <v-card-subtitle class="grey--text">CATEGORY</v-card-subtitle>
          <v-card-title>{{ cat.title }}</v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn
              outlined
              color="green darken-3"
              style="text-transform: capitalize"
              :to="cat.link"
              >{{ cat.btnText
              }}<span>
                <v-icon>mdi-arrow-right</v-icon>
              </span></v-btn
            >
          </v-card-actions>
        </v-card>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      categories: [
        {
          img: require("../assets/color_braid.svg"),
          title: "Enrolled Students",
          btnText: "Students",
          link: "/students",
        },
        {
          img: require("../assets/retro.svg"),
          title: "Courses Offered",
          btnText: "Courses",
          link: "/courses",
        },
        {
          img: require("../assets/color_braid.svg"),
          title: "Instructors",
          btnText: "Instructors",
          link: "/instructors",
        },
      ],
    };
  },

  created() {
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchInstructors");
    this.$store.dispatch("fetchStudents");
  }
};
</script>

<style lang="scss" scoped>
.home {
  main {
    padding: 10px;
    width: 80%;
    h1 {
      margin-bottom: 3rem;
    }
    .categories {
      display: flex;
    }
  }
}

@media screen and (min-width: 1000px) {
  main {
    margin: auto 0 0 60px;
    .categories {
      justify-content: space-around;
      .v-card {
        width: 300px;
        margin: 1rem 0 1rem 10px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  main {
    margin: auto 0 0 60px;
    .categories {
      flex-direction: column;
      .v-card {
        width: 100%;
        margin: 1rem 0 1rem 10px;
      }
    }
  }
}
</style>
