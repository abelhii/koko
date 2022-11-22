<template>
  <div class="about">
    <header>
      <div class="content">
        <h1>
          <span data-tooltip="Koko">Wardah</span> is a<br />
          multidisciplinary <br />
          designer.
        </h1>

        <MiniKoko class="mini-koko" />
      </div>
    </header>
    <section>
      <div class="content">
        <p>
          As an ardent believer in the power of human-centered design, I am
          fascinated by user interaction and people-based problem-solving. I
          approach design empathetically and focus on understanding the latent
          needs and emotions of the people I am designing for, aiming to create
          clear, impactful solutions to enrich their lives.
        </p>
        <p>
          I have worked on projects in UI UX, web and app design, branding, and
          identity, and I previously worked in digital and print design. I enjoy
          collaboration, analog and digital experimentation, and learning about
          new tools and approaches to enhance my design process.
        </p>
        <p>
          Outside of design, my interests include sketching and painting,
          miniature clay modeling, gaming, traveling, researching new
          technologies, and music/podcasts.
        </p>
        <p>
          Do you want to work together or say hi?
          <a href="mailto:koko.wk@outlook.com">Let's chat!</a> :)
        </p>
        <p>
          If you are interested to know more about my experience and education,
          click on my resume in the footer.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-dom";
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

      span {
        cursor: pointer;
        color: $dark-blue;
      }
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

      a {
        text-decoration: none;
        color: $dark-blue;
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
