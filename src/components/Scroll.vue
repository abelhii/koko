<template>
  <div class="scroll-parent" :alt="scrollWord">
    <img class="scrolling" src="../assets/images/scroll.svg" />
    <img class="scrolling" src="../assets/images/scroll.svg" />
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
$scroll-anim: 35s linear 0s infinite normal none running scroll;

.scroll-parent {
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;

  .scrolling {
    user-select: none;
    min-height: 15rem;
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
  $scroll-anim: 50s linear 0s infinite normal none running scroll;
  .scroll-parent {
    .scrolling {
      padding-left: 10rem;
      min-height: 40vh;
      -webkit-animation: $scroll-anim;
      -moz-animation: $scroll-anim;
      -o-animation: $scroll-anim;
      animation: $scroll-anim;
    }
  }
}
</style>
