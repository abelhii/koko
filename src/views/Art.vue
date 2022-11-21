<template>
  <section class="content gallery">
    <div class="artwork" v-for="(art, index) in artworks" :key="(index)">
      <ImageItem
        class="art-img"
        v-if="art.pathLong"
        :id="`art-${index}`"
        :source="art.pathLong"
        :alt="art.name"
      />
      <label :for="`art-${index}`">{{ art.name }}</label>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";
import { analytics } from "@/init-firebase";
import { logEvent } from "firebase/analytics";

import ImageItem from "@/components/ImageItem.vue";

export interface IArtworks {
  pathLong: string;
  pathShort: string;
  name: string;
}

export default defineComponent({
  name: "Art",
  components: {
    ImageItem,
  },
  data() {
    return {
      artworks: [] as IArtworks[],
    };
  },
  mounted() {
    logEvent(analytics, "project_visits", { title: "Art" });

    this.importAll(
      require.context("../assets/images/art-images", true, /webp$/)
    );
  },
  methods: {
    /**
     * Get's files from a given folder path and puts it in a javascript array
     * @param r  require.context("../relative-path", true, /webp$/)
     * @returns
     */
    importAll(r: any): void {
      r.keys().forEach((key: string) => {
        this.artworks.push({
          pathLong: r(key),
          pathShort: key,
          name: this.getName(key),
        });
      });
    },
    getName(path: string): string {
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
  padding: 4rem 0 !important;
  overflow: hidden;

  .artwork {
    display: grid;
    place-items: center;
    gap: 1rem;
    color: $black;
    margin: 0 2rem;

    .art-img {
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
      margin: 0;

      label {
        position: absolute;
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      &:hover {
        .art-img {
          filter: brightness(0.5);
        }

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
