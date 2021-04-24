<template>
  <footer>
    <div class="socials">
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
    </div>
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
  .socials {
    display: flex;
    gap: 1.5rem;
  }
}
</style>
