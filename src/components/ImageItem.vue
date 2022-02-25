<template>
  <figure v-lazyload class="image__wrapper">
    <ImageSpinner class="image__spinner" />
    <img
      class="image__item"
      :data-url="source"
      :alt="alt"
      :class="imageClass"
      :style="imageStyle"
    />
  </figure>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ImageSpinner from "./ImageSpinner.vue";

export default defineComponent({
  name: "ImageItem",
  components: {
    ImageSpinner,
  },
  props: {
    source: { type: String, required: true },
    alt: String,
    imageStyle: String,
    imageClass: String,
  },
});
</script>

<style lang="scss" scoped>
.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;

    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
          border: 0;
        }

        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }

  &__item {
    max-height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
