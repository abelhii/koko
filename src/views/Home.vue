<template>
  <Scroll :scrollWord="scrollWord" />
  <div class="home">
    <header ref="header">
      <div class="content">
        <p>
          Koko is a designer focused on creating user-centric experiences and
          meaningful identities.
        </p>
        <DownArrow v-on:click="scrollTo('projects')" />
      </div>
    </header>
    <section ref="projects">
      <div class="content">
        <h1>SELECTED PROJECTS</h1>
        <div class="projects">
          <div v-for="project in projects" :key="project">
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scroll from "@/components/Scroll.vue";
import DownArrow from "@/components/DownArrow.vue";
import ProjectCard from "@/components/Projects/ProjectCard.vue";
import { kokoStore, scrollMeTo } from "@/main";

export default defineComponent({
  name: "Home",
  components: {
    Scroll,
    DownArrow,
    ProjectCard,
  },
  data() {
    return {
      scrollWord: "DESIGN USER INTERFACE USER EXPERIENCE BRANDING",
      projects: kokoStore.store.projects,
    };
  },
  methods: {
    scrollTo(refName: string) {
      const element = this.$refs[refName] as HTMLElement;
      scrollMeTo(element);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

.home {
  display: grid;
  gap: 4rem;
  height: 100%;
  margin: auto;

  header > .content {
    display: grid;
    place-items: center;
    gap: 6rem;

    p {
      text-align: left;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  section {
    padding: 4rem 0;
    min-height: 100vh;
    color: white;
    background-color: $black;

    .content {
      h1 {
        font-size: 2rem;
      }

      .projects {
        display: grid;
        gap: 4rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  .home {
    .content {
      padding: 0 6rem;
    }

    header > .content {
      gap: 10rem;

      p {
        font-size: 3rem;
      }
    }

    section {
      .content {
        h1 {
          font-size: 8rem;
        }

        .projects {
          gap: 8rem;
        }
      }
    }
  }
}
</style>
