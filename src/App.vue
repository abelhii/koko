<template>
  <Nav ref="top" :navOptions="navOptions" />
  <router-view />
  <div
    class="up-arrow"
    v-bind:class="{ display: upArrow }"
    v-on:click="scrollTo('top')"
  >
    <!-- <span>Go to top</span> -->
    <DownArrow :direction="'up'" :inverseColor="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Nav from "@/components/Nav.vue";
import DownArrow from "@/components/DownArrow.vue";
import { scrollMeTo } from "./main";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    DownArrow,
  },
  data() {
    return {
      navOptions: ["HOME", "ART", "ABOUT"],
      upArrow: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollTo(refName: string) {
      const element = this.$refs[refName] as HTMLElement;
      scrollMeTo(element);
    },
    handleScroll() {
      if (window.scrollY >= 1500) this.upArrow = true;
      else this.upArrow = false;
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;1,400&display=swap");
@import "styles/_defaultVars.scss";

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  margin: auto;
  color: $black;

  .content {
    margin: auto;
    max-width: $max-width;
    padding: 0 2rem;
  }

  .up-arrow {
    cursor: pointer;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-end;
    color: white;

    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    &.display {
      opacity: 1;
    }
  }
}

@media (min-width: 1024px) {
  #app {
    .content {
      padding: 0 4rem;
    }
  }
}
</style>
