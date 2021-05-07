<template>
  <div ref="top"></div>
  <Nav :navOptions="navOptions" />
  <router-view class="router-view" />
  <div
    class="up-arrow"
    v-bind:class="{ display: upArrow }"
    v-on:click="scrollTo('top')"
  >
    <!-- <span>Go to top</span> -->
    <DownArrow :direction="'up'" :inverseColor="true" />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Nav from "@/components/Nav.vue";
import DownArrow from "@/components/DownArrow.vue";
import Footer from "@/components/Footer.vue";
import { scrollMeTo } from "./main";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    DownArrow,
    Footer,
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
      if (window.scrollY >= 1250) this.upArrow = true;
      else this.upArrow = false;
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
