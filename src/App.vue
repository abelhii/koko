<template>
  <div ref="top"></div>
  <Nav :navOptions="navOptions" />
  <router-view class="router-view" />
  <div
    class="up-arrow"
    ref="upArrow"
    v-bind:class="{ display: upArrow }"
    v-on:click="scrollTo('top')"
  >
    <UpArrow />
  </div>
  <div ref="footer" v-if="!isProject">
    <Footer />
  </div>
  <div ref="projectFooter" v-if="isProject">
    <ProjectFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Nav from "@/components/Nav.vue";
import UpArrow from "@/components/UpArrow.vue";
import Footer from "@/components/Footer.vue";
import ProjectFooter from "@/components/Projects/ProjectFooter.vue";
import { scrollMeTo } from "./main";
import { analytics } from "./init-firebase";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    UpArrow,
    Footer,
    ProjectFooter,
  },
  data() {
    return {
      navOptions: ["HOME", "ART", "ABOUT"],
      upArrow: false,
      isProject: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    console.log(analytics);
  },
  watch: {
    $route() {
      this.isProject = this.$route.path.includes("projects");
    },
  },
  methods: {
    scrollTo(refName: string) {
      const element = this.$refs[refName] as HTMLElement;
      scrollMeTo(element);
    },
    handleScroll() {
      if (window.scrollY >= 1250) this.upArrow = true;
      else this.upArrow = false;

      const footer = !this.isProject
        ? this.$refs.footer
        : this.$refs.projectFooter;
      const upArrowElem = this.$refs.upArrow;
      if (!footer || !upArrowElem) return;
      if (this.isInView(footer)) {
        const rect = footer.getBoundingClientRect();
        upArrowElem.style.bottom = `${window.innerHeight - rect.top - 20}px`;
      } else {
        upArrowElem.style.bottom = "2rem";
      }
    },
    isInView(el: HTMLElement) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top + 32 <=
        (window.innerHeight || document.documentElement.clientHeight)
      );
    },
  },
});
</script>

<style lang="scss">
@import "styles/_fonts.scss";
@import "styles/_defaultVars.scss";

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Gilroy", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  margin: auto;
  min-height: 100vh;
  color: $black;
  background-color: $light-grey;

  .content {
    margin: auto;
    max-width: $max-width;
    padding: 0 2rem;
  }

  .router-view {
    min-height: calc(100vh - 18rem);
  }

  .up-arrow {
    cursor: pointer;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    mix-blend-mode: exclusion;

    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    &.display {
      opacity: 1;
    }
  }
}

/* Tooltips */
[data-tooltip]:before {
  position: absolute;
  content: attr(data-tooltip);
  font-size: 1.5rem;
  color: $black;
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  box-shadow: 4px 4px 0px $accent;
  pointer-events: none;
  opacity: 0;
  transition: all 0.15s ease-out;
}

[data-tooltip]:hover:before {
  opacity: 1;
  background: #fff;
  margin-top: -56px;
  margin-left: -0.5rem;
}

@media (min-width: 1024px) {
  #app {
    .content {
      padding: 0 4rem;
    }

    .up-arrow {
      right: 4rem;
      bottom: 4rem;
    }
  }
}
</style>
