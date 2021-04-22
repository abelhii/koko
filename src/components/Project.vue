<template>
  <div class="project">
    <img src="https://source.unsplash.com/random" alt="Project Image" />
    <h1 class="title">Project name</h1>
    <h3 class="snippet">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut magna
      aenean.
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Project",
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

.project {
  background-color: $black;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .title {
    color: white;
  }

  .snippet {
    color: grey;
    font-weight: 500;
  }
}

@media (min-width: 1024px) {
  .project {
    img {
      height: 600px;
    }
  }
}
</style>
