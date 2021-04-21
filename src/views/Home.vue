<template>
  <Nav :navOptions="navOptions" />
  <Scroll :scrollWord="scrollWord" />
  <div class="home">
    <header>
      <p>
        Koko is a designer focused on creating user-centric experiences and
        meaningful identities.
      </p>
      <DownArrow />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import Scroll from "@/components/Scroll.vue";
import DownArrow from "@/components/DownArrow.vue";

export default defineComponent({
  name: "Home",
  components: {
    Nav,
    Scroll,
    DownArrow,
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
  position: relative;
  height: 100%;
  margin: auto;
  max-width: $max-width;

  header {
    display: grid;
    place-items: center;
    gap: 8rem;

    p {
      text-align: left;
      font-size: 2rem;
      font-weight: 600;
      padding: 0 4rem;
    }
  }
}

@media (min-width: 1024px) {
  .home {
    header {
      p {
        font-size: 3rem;
      }
    }
  }
}
</style>
