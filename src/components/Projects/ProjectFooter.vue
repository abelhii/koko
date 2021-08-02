<template>
  <footer>
    <router-link
      class="arrow"
      :to="{ name: 'projects', params: { id: prevProject?.id } }"
    >
      ⬅ Prev Project
    </router-link>
    <h2>WORK</h2>
    <router-link
      class="arrow"
      :to="{ name: 'projects', params: { id: nextProject?.id } }"
    >
      Next Project ➡
    </router-link>
  </footer>
</template>

<script lang="ts" scoped>
import { kokoStore } from "@/main";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "ProjectFooter",
  data() {
    return { prevProject: null, nextProject: null };
  },
  mounted() {
    this.getPrevAndNextProjects();
  },
  methods: {
    getPrevAndNextProjects() {
      const projectId = this.$route.params.id;
      this.prevProject = kokoStore.getPrevProject(projectId);
      this.nextProject = kokoStore.getNextProject(projectId);
    },
  },
  watch: {
    $route() {
      this.getPrevAndNextProjects();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/_defaultVars.scss";

footer {
  display: flex;
  place-items: center;
  justify-content: space-between;
  padding: 4rem;
  color: white;
  background-color: $black;

  .arrow {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
