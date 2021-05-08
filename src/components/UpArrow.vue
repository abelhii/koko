<template>
  <div class="pointed-arrow">
    <div class="arrow"></div>
    <span>TOP</span>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Up Arrow",
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.pointed-arrow {
  --arrow-color: white;
  position: relative;
  display: grid;
  transform: rotate(-90deg) scale(1, -1);
  padding-bottom: 7rem; // for the word "Top"
  transition: 0.15s;

  &:active,
  &:hover {
    color: $accent;
    .arrow {
      &:before {
        background-color: $accent;
      }
      &:after {
        border-color: transparent transparent transparent $accent;
      }
    }
  }

  span {
    position: absolute;
    top: 1px;
    left: -45px;
    font-size: 2rem;
    font-weight: 600;
    transform: scale(-1, 1);
  }

  .arrow {
    display: flex;
    align-items: center;
    overflow: hidden;

    &::before {
      content: "";
      display: block;
      width: 66px;
      height: 5px;
      background-color: var(--arrow-color);
    }
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 0 10px 20px;
      border-color: transparent transparent transparent var(--arrow-color);
    }
  }
}
</style>
