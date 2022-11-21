<template>
  <div class="arrow-circle">
    <div class="arrow"></div>
    <strong>TOP</strong>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "Up Arrow",
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.arrow-circle {
  display: grid;
  place-content: center;
  place-items: center;
  padding: 1rem;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: white;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: $short-shadow;

  &:hover {
    box-shadow: 4px 4px 2px 0px $accent;
  }

  &:active {
    color: $accent;
    box-shadow: inset 1px 1px 4px 0px $accent;
  }

  .arrow {
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 0.25rem;
    border-left-width: 0.25rem;
    border-bottom: 0.5rem solid black;
  }
}
</style>
