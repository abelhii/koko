<template>
  <section class="content gallery">
    <div class="artwork" v-for="(art, index) in artworks" :key="(art, index)">
      <img :id="`art-${index}`" :src="art.pathLong" :alt="art.name" />
      <label :for="`art-${index}`">{{ art.name }}</label>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Art",
  data() {
    return {
      artworks: [],
    };
  },
  mounted() {
    this.importAll(
      require.context("../assets/images/art-images", true, /webp$/)
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) => {
        this.artworks.push({
          pathLong: r(key),
          pathShort: key,
          name: this.getName(key),
        });
      });
    },
    getName(path) {
      return path.split(new RegExp(/(?<=\.\/)(.*?)(?=.webp)/g))[1];
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

header {
  font-size: 10rem;
}

.gallery {
  display: grid;
  place-items: center;
  gap: 2rem;
  row-gap: 4rem;
  grid-template-columns: 1fr;
  margin: 4rem auto !important;
  overflow: hidden;

  .artwork {
    display: grid;
    place-items: center;
    gap: 1rem;
    color: $black;

    img {
      object-fit: cover;
      max-width: 95%;
      // box-shadow: 0px 0px 10px 2px #ccc;
      transition: filter 0.3s ease-in-out;
    }

    label {
      font-weight: 500;
    }

    &:last-child {
      margin-bottom: 10vh;
    }
  }
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: 1fr 1fr;

    .artwork {
      position: relative;
      place-items: center;

      img {
        &:hover {
          filter: brightness(0.5);
        }
      }

      label {
        position: absolute;
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      &:hover {
        label {
          opacity: 1;
        }
      }

      &:last-child {
        grid-column: span 2;

        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
