<template>
  <div class="module-details">
    <sidenav />

    <main v-for="course in courses" :key="course._id">
      <div class="main-section" v-if="course._id === courseId">
        <h1 style="text-transform: capitalize">{{ course.name }}</h1>
        <p class="subtitle">{{ course.feeAmount }}</p>

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
.main-section {
  margin: 1rem 0 0 280px;
}
</style>
