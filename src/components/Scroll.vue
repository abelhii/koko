<template>
  <div class="scroll-parent" alt="{{ scrollWord }}">
    <span class="scrolling">{{ scrollWord }}</span>
    <span class="scrolling">{{ scrollWord }}</span>
    <span class="scrolling">{{ scrollWord }}</span>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Scroll",
  props: {
    scrollWord: String,
  },
});
</script>

<style lang="scss" scoped>
$scroll-anim: scroll 20s infinite linear;

.scroll-parent {
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  .scrolling {
    padding-left: 5rem;
    font-size: 10rem;
    font-weight: 700;
    -webkit-animation: $scroll-anim;
    -moz-animation: $scroll-anim;
    -o-animation: $scroll-anim;
    animation: $scroll-anim;
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@media (min-width: 1024px) {
  $scroll-anim: scroll 30s infinite linear;
  .scroll-parent {
    .scrolling {
      padding-left: 10rem;
      font-size: 30rem;
      -webkit-animation: $scroll-anim;
      -moz-animation: $scroll-anim;
      -o-animation: $scroll-anim;
      animation: $scroll-anim;
    }
  }
}
</style>
