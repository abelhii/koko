<template>
  <footer>
    <section>
      <div class="socials content">
        <SocialBadge
          :url="
            'https://docs.google.com/document/d/1Qoj798e3zTNMt8hGVFon6DE8dErULbpwd2mWzty6-ls/edit?usp=sharing'
          "
          :faIcon="'far fa-file'"
        />
        <SocialBadge
          :url="'https://www.linkedin.com/in/wardah-kay-62459b162/'"
          :faIcon="'fab fa-linkedin-in'"
        />
        <SocialBadge
          :url="'mailto:koko.wk@outlook.com'"
          :faIcon="'fas fa-envelope'"
        />
        <SocialBadge
          :url="'https://www.instagram.com/lady_glitchh'"
          :faIcon="'fab fa-instagram'"
        />
        <SocialBadge
          :url="'https://www.instagram.com/lady_glitchh'"
          :faIcon="'fab fa-instagram'"
        />
      </div>
    </section>
    <!-- <section class="bottom">
      <small class="content">
        Made with 🧡 by
        <a href="https://abelhii.com" target="_blank" rel="noopener noreferrer">
          Abel
        </a>
      </small>
    </section> -->
  </footer>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SocialBadge from "./SocialBadge";

export default defineComponent({
  name: "Footer",
  components: {
    SocialBadge,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

footer {
  section {
    background-color: $black;
    padding: 2rem;

    &.bottom {
      background-color: #1a1a1a;
      padding: 0;
      text-align: center;

      .content,
      a {
        color: $grey;
        margin: 0;
      }
    }

    .content {
      max-width: $max-width;
      margin: auto;
      padding: 0 !important;
    }

    .socials {
      display: flex;
      gap: 1.5rem;
    }
  }
}

@media (min-width: 1024px) {
  footer {
    section {
      padding: 4rem;
    }
  }
}
</style>
