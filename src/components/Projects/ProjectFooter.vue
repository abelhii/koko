<template>
  <footer>
    <router-link
      class="arrow"
      :to="{ name: 'projects', params: { id: prevProject.id } }"
    >
      <span>⬅ Prev Project</span>
    </router-link>
    <h2>WORK</h2>
    <router-link
      class="arrow"
      :to="{ name: 'projects', params: { id: nextProject.id } }"
    >
      <span>Next Project ➡</span>
    </router-link>
  </footer>
</template>

<script lang="ts" scoped>
import { kokoStore } from "@/main";
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "ProjectFooter",
  data() {
    return { prevProject: {id: null}, nextProject: {id: null} };
  },
  mounted() {
    this.getPrevAndNextProjects();
  },
  methods: {
    getPrevAndNextProjects() {
      const projectId = this.$route.params.id as string;
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
  padding: 1rem;
  color: white;
  background-color: $black;

  .arrow {
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  h2 {
    font-size: 1.25rem;
  }

  span {
    font-size: 0.75rem;
  }
}

@media (min-width: 425px) {
  footer {
    padding: 2rem;

    h2 {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
    }
  }
}

@media (min-width: 1024px) {
  footer {
    padding: 4rem;

    h2 {
      font-size: 2rem;
    }
  }
}
</style>
