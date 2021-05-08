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
    <section>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          assumenda tenetur enim, aspernatur mollitia suscipit exercitationem
          iure voluptas in, culpa excepturi hic ad dicta, velit cupiditate! Cum
          placeat ratione vero a aliquam facilis? Consequatur totam eum
          quibusdam exercitationem dolorem. Molestiae quia fugiat sit ab!
        </p>
        <p>
          Consectetur nemo ex blanditiis totam natus dolore maxime eligendi
          accusantium laboriosam dolor! In modi sed, veniam sapiente nam debitis
          rerum, rem consequatur, non dicta animi ipsa optio beatae facilis
          molestias fugit ad repellendus esse repellat iusto saepe labore minima
          dolore aliquid? Dolorum, delectus eum quasi adipisci fuga error
          placeat, molestias magnam ullam accusantium iste eos temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          assumenda tenetur enim, aspernatur mollitia suscipit exercitationem
          iure voluptas in, culpa excepturi hic ad dicta, velit cupiditate! Cum
          placeat ratione vero a aliquam facilis? Consequatur totam eum
          quibusdam exercitationem dolorem. Molestiae quia fugiat sit ab!
        </p>
      </div>
    </section>
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

  section {
    background-color: white;
    min-height: 40vh;
    margin-top: 4rem;
    padding: 2rem;

    .content {
      p {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 2rem;
      }
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

    section {
      padding: 4rem;
    }
  }
}
</style>
