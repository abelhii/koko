<template>
  <Nav :navOptions="navOptions" />
  <Scroll :scrollWord="scrollWord" />
  <div class="home">
    <header>
      <div class="home-content">
        <p>
          Koko is a designer focused on creating user-centric experiences and
          meaningful identities.
        </p>
        <DownArrow />
      </div>
    </header>
    <section>
      <div class="home-content">
        <h1>SELECTED PROJECTS</h1>
        <div class="projects">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import Scroll from "@/components/Scroll.vue";
import DownArrow from "@/components/DownArrow.vue";
import Project from "@/components/Project.vue";

export default defineComponent({
  name: "Home",
  components: {
    Nav,
    Scroll,
    DownArrow,
    Project,
  },
  data() {
    return {
      navOptions: ["HOME", "WORK", "ART", "ABOUT"],
      scrollWord: "USER INTERFACE USER EXPERIENCE",
    };
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

  .home-content {
    margin: auto;
    max-width: $max-width;
    padding: 0 4rem;
  }

  header > .home-content {
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

    .home-content {
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
    .home-content {
      padding: 0 6rem;
    }

    header > .home-content {
      gap: 10rem;

      p {
        font-size: 3rem;
      }
    }

    section {
      .home-content {
        h1 {
          font-size: 8rem;
        }
      }
    }
  }
}
</style>
