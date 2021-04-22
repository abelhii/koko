<template>
  <div class="arrow">
    <div class="line"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DownArrow",
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

.arrow {
  cursor: pointer;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0 2rem;

  .line {
    height: 4rem;
    width: 4px;
    border-radius: 4px;
    background-color: $black;
  }

  .circle {
    border-radius: 50%;
    padding: 0.5rem;
    background-color: $black;
  }

  &:hover {
    .circle {
      animation: godown 0.75s infinite linear;
    }
  }

  &:active {
    .line,
    .circle {
      transition: 0.1s ease-in-out;
      background-color: $accent;
    }

    .circle {
      animation: none;
    }
  }
}

@keyframes godown {
  0% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(-3rem);
  }
  80% {
    transform: translateY(-4.5rem);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
