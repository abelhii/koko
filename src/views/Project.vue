<template>
  <div class="project">
    <header>
      <div class="content">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
      </div>
    </header>
    <section>
      <div class="content gallery">
        <div class="pictures" v-for="picture in pictures" :key="picture">
          <img src="{{picture.src}}" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { kokoStore } from "@/main";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Project",
  data() {
    return {
      project: {},
    };
  },
  created() {
    this.getProject();
  },
  methods: {
    getProject() {
      const projectId = this.$route.params.id;
      this.project = { ...kokoStore.getProjectById(projectId) };
    },
  },
  watch: {
    $route() {
      this.getProject();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.project {
  header .content {
    background-color: $light-grey;
    display: grid;
    justify-content: left;
    text-align: left;
    padding: 4rem 2rem !important;

    h1 {
      font-size: 4rem;
      margin: 1rem 0;
    }
    p {
      font-size: 1.5rem;
      margin: 1rem 0;
      max-width: 50ch;
    }
  }

  section .content.gallery {
    .pictures {
      display: grid;
      gap: 2rem;
    }
  }
}
</style>
