<template>
  <div class="about">
    <header>
      <div class="content">
        <h1>
          I'm Koko, a<br />
          multidisciplinary <br />
          designer.
        </h1>

        <MiniKoko class="mini-koko" />
      </div>
    </header>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import MiniKoko from "@/components/MiniKoko.vue";

export default defineComponent({
  name: "About",
  components: {
    MiniKoko,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.about {
  header .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 4rem 2rem !important;

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
      word-break: break-word;
    }

    p {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
}

@media (min-width: 768px) {
  .about {
    header .content {
      flex-direction: row;
      justify-content: space-evenly;
      gap: 2rem;

      h1 {
        font-size: 4rem;
        word-break: unset;
      }

      .mini-koko {
        width: 100%;
      }
    }
  }
}
</style>
