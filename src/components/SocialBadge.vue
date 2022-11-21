<template>
  <a class="icon" target="_blank" rel="noopener noreferrer" :href="url">
    <i :class="faIcon"></i>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-dom';

export default defineComponent({
  name: "Social Badge",
  props: {
    url: { type: String, required: true },
    faIcon: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

.icon {
  position: relative;
  padding: 0.75rem;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background-color: white;
  color: $black;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-shadow: $short-shadow;

  &:hover {
    box-shadow: 4px 4px 2px 0px $accent;
  }

  &:active {
    color: $accent;
    box-shadow: inset 1px 1px 4px 0px $accent;
  }
}
</style>
