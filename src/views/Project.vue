<template>
  <div class="project">
    <header class="content">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </header>
    <section class="content gallery">
      <div v-for="(image, index) in images" :key="(image, index)">
        <div v-if="image.name">
          <ImageItem
            class="project-img"
            v-if="!image.pics"
            :id="`img-${index}`"
            :source="getImgUrl(image.fileName)"
            :alt="image.name"
          />
          <div class="pics" v-if="image.pics">
            <ImageItem
              class="project-img"
              v-for="pic in image.pics"
              :key="pic"
              :source="getImgUrl(pic)"
              :alt="image.name"
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
import { defineComponent } from "@vue/composition-api";
import ImageItem from "@/components/ImageItem.vue";

export interface IProject {
  id: string;
  title: string;
  description: string;
  featuredImage: string;
  images: { break: string; name: string; pics: string[] }[];
}

export interface IProjectImage {
  name: string;
  fileName: string;
  pics: string[];
  whiteSection: boolean;
  break: string;
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
    window.scrollTo(0, 0);
  },
  methods: {
    getProject(): void {
      const projectId = this.$route.params.id;
      this.project = { ...kokoStore.getProjectById(projectId) };
      this.constructImagePaths();
    },
    constructImagePaths(): void {
      if (!this.project?.images) {
        console.error("images don't exist");
        return;
      }

      this.project.images.forEach(
        (image: { break: string; name: string; pics: string[] }) => {
          const whiteSection = image.name?.match?.(/-w$/g);
          this.images.push({
            name: image.name,
            fileName: `${image.name}.webp`,
            pics: image.pics,
            whiteSection: whiteSection !== null,
            break: image.break,
          });
        }
      );
    },
    getImgUrl(fileName: string) {
      return require(`../assets/images/project-images/${this.project.id}/` +
        fileName);
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
      font-size: 1.5rem;
      margin: 1rem 0;
      max-width: 50ch;
    }
  }

  section.content.gallery {
    display: grid;
    gap: 2rem;

    .break {
      padding-top: 4rem;
      text-align: center;
      font-size: 1rem;
    }
    .pics {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
  }
}

@media (min-width: 1024px) {
  .project {
    header.content {
      padding: 4rem !important;
    }
    section.content.gallery {
      gap: 6rem;

      .break {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
