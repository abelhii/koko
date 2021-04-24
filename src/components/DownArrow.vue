<template>
  <div class="arrow" :class="[direction, inverseColor ? 'inverse-color' : '']">
    <div class="line"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DownArrow",
  props: {
    direction: String,
    inverseColor: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

.arrow {
  --line-height: 4rem;
  --background-color: #212121;
  cursor: pointer;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0 2rem;

  // down by default
  &.left {
    transform: rotate(90deg);
  }
  &.right {
    transform: rotate(-90deg);
  }
  &.up {
    transform: rotate(180deg);
  }

  &.inverse-color {
    --background-color: white;
  }

  .line {
    height: var(--line-height);
    width: 4px;
    border-radius: 4px;
    background-color: var(--background-color);
  }

  .circle {
    border-radius: 50%;
    padding: 0.5rem;
    margin-top: -0.5rem;
    background-color: var(--background-color);
  }

  &:active {
    .line,
    .circle {
      transition: background-color 0.1s ease-in-out;
      background-color: $accent;
    }

    .circle {
      animation: none;
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .arrow {
    &:hover {
      .circle {
        animation: waitForClick 0.75s infinite linear;
      }
    }
  }
}

@keyframes waitForClick {
  0% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(calc(calc(var(--line-height) - 1rem) * -1));
  }
  80% {
    transform: translateY(calc(calc(var(--line-height) + 0.5rem) * -1));
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
