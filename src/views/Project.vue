<template>
  <div class="project">
    <header class="content">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </header>
    <section class="gallery" v-if="images.length > 0">
      <div
        v-for="(image, index) in images"
        :style="{ background: image.bgColor }"
        :class="image.class"
        :key="index"
      >
        <div v-if="image.name">
          <ImageItem
            class="project-img"
            v-if="!image.pics"
            :id="`img-${index}`"
            :source="getImgUrl(image.fileName)"
            :alt="image.name"
            :imageStyle="'border-radius: 4px;' + image.style"
          />
          <div class="pics" v-if="image.pics">
            <ImageItem
              class="project-img"
              v-for="pic in image.pics"
              :key="pic"
              :source="getImgUrl(pic)"
              :alt="image.name"
              :imageStyle="'border-radius: 4px;' + image.style"
            />
          </div>
        </div>
        <div class="break" v-if="image.break">
          <h1>{{ image.break }}</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { kokoStore } from "@/main";
import ImageItem from "@/components/ImageItem.vue";
import { analytics } from "@/init-firebase";
import { logEvent } from "firebase/analytics";
import { defineComponent } from "@vue/runtime-dom";

export interface IProject {
  id: string;
  title: string;
  description: string;
  featuredImage: string;
  images: IProjectImage[];
}

export interface IProjectImage {
  name: string;
  fileName: string;
  pics: string[];
  break: string;
  bgColor: string;
  style: string;
  class: string;
}

export default defineComponent({
  name: "Project",
  components: {
    ImageItem,
  },
  data() {
    return {
      project: {} as IProject,
      images: [] as IProjectImage[],
      rootPath: "",
    };
  },
  mounted() {
    this.getProject();
    if (Object.keys(this.project).length === 0) {
      this.$router.push({ path: "../home" });
    }
  },
  methods: {
    getProject(): void {
      this.images.length = 0;
      const projectId = this.$route.params.id as string;
      this.project = { ...kokoStore.getProjectById(projectId) };
      setTimeout(() => this.constructImagePaths());
      window.scrollTo(0, 0);

      logEvent(analytics, "project_visits", { title: this.project.title });
    },
    constructImagePaths(): void {
      if (!this.project?.images) {
        console.error("images don't exist");
        return;
      }

      this.project.images.forEach((image): void => {
        this.images.push({
          name: image.name,
          fileName: image.name,
          pics: image.pics,
          break: image.break,
          bgColor: image.bgColor,
          style: image.style,
          class: image.class,
        });
      });
    },
    getImgUrl(fileName: string) {
      return require(`../assets/images/project-images/${this.project.id}/${fileName}`);
    },
  },
  watch: {
    $route() {
      this.getProject();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.project {
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
  margin-bottom: 8rem;

  header.content {
    background-color: $light-grey;
    display: grid;
    justify-content: left;
    text-align: left;
    white-space: pre-wrap;

    h1 {
      font-size: 4rem;
      margin: 1rem 0;
    }
    p {
      font-size: 1.25rem;
      margin: 1rem 0;
      max-width: 50ch;
    }
  }

  section.gallery {
    --gap: 2rem;
    display: grid;
    gap: var(--gap);

    > :nth-child(n) {
      // v-for
      display: flex;
      padding: 0 2rem;
      justify-content: center;

      > :nth-child(n) {
        // inner div
        width: 100%;
        max-width: $max-width;
      }
    }

    .break {
      padding-top: 4rem;
      text-align: center;
      font-size: 1rem;
    }
    .pics {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
    }

    // extra classes
    .full-width {
      padding: 0;

      > div {
        max-width: none !important;
      }
    }
    .no-gap-top {
      margin-top: calc(var(--gap) * -1);
    }
    .no-gap-bottom {
      margin-bottom: calc(var(--gap) * -1);
    }
    .no-gap-bottom-end {
      margin-bottom: -8rem;
    }

    @for $i from 1 through 8 {
      .padding-top-#{$i} {
        padding-top: ($i) * 1rem;
      }

      .padding-bottom-#{$i} {
        padding-bottom: ($i) * 1rem;
      }

      .padding-top-bottom-#{$i} {
        padding: ($i) * 1rem 2rem;
      }
    }
  }
}

@media (min-width: 768px) {
  .project {
    header.content {
      padding: 4rem !important;

      p {
        font-size: 1.5rem;
      }
    }

    section.gallery {
      --gap: 6rem;
      gap: var(--gap);

      .break {
        margin-bottom: -4rem;
        font-size: 1.5rem;
      }

      .pics {
        flex-direction: row;
        align-items: flex-start;
      }

      @for $i from 1 through 8 {
        .padding-left-right-#{$i} {
          padding: 0 ($i) * 1rem;
        }
      }
    }
  }
}
</style>
