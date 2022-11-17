<template>
  <div class="module-details">
    <sidenav />

    <main v-for="course in courses" :key="course._id">
      <div class="main-section" v-if="course._id === courseId">
        <h1 style="text-transform: capitalize">{{ course.name }}</h1>
        <p class="subtitle">Ksh. {{ course.feeAmount }}</p>

        <ul class="topics-list">
          <li v-for="(topic, i) in course.topics" :key="i">
            {{ topic.title }}
          </li>
        </ul>
      </div>
      
      
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      courseId: this.$route.params.courseId,
    };
  },

  computed: {
    ...mapGetters(["courses", "isLoading"]),
  },
};
</script>

<style lang="scss" scoped>
.module-details {
  main {
    margin: auto 0 0 260px;
    padding: 2rem;
  }
}
</style>
