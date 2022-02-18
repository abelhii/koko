<template>
  <div class="project-card">
    <ImageItem
      class="project-img"
      :imageClass="'card-image'"
      :source="
        getImgUrl(project.featuredImage)
          ? getImgUrl(project.featuredImage)
          : 'https://source.unsplash.com/random'
      "
      :alt="project.title"
    />
    <router-link
      class="view-project-cta"
      :to="{ name: 'projects', params: { id: project.id } }"
    >
      View <br />
      Project
    </router-link>
    <div class="project-body">
      <h1>{{ project.title }}</h1>
      <h3 class="snippet">
        {{ project.intro }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ImageItem from "@/components/ImageItem.vue";

export default defineComponent({
  name: "Project Card",
  components: {
    ImageItem,
  },
  props: {
    project: {
      id: String,
      title: String,
      intro: String,
      description: String,
      featuredImage: String,
      required: true,
    } as any,
  },
  computed: {
    slicedDescription(): string | void {
      return this.project.description?.slice(0, 185) + "...";
    },
  },
  methods: {
    getImgUrl(fileName: string) {
      if (!fileName) return;
      return require(`../../assets/images/project-images/${this.project.id}/` +
        fileName);
    },
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.project-card {
  --radius: 8px;
  display: grid;
  background-color: $black;

  .view-project-cta {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    place-self: end;
    margin-bottom: 156px;
    margin-right: 24px;
    height: 24px;
    width: 24px;
    padding: 24px;
    font-size: 14px;
    color: $black;
    text-align: center;
    border-radius: 50%;
    background-color: $accent;
    user-select: none;
    text-decoration: none;
  }

  .project-img::v-deep img.image__item {
    border-radius: var(--radius) var(--radius) 0 0;
  }

  .project-body {
    height: 140px;
    padding: 1.75rem 2rem;
    background-color: white;
    border-radius: 0 0 var(--radius) var(--radius);

    h1 {
      color: $black;
      margin: 0;
      margin-bottom: 1rem;
    }

    h3 {
      margin: 0;
      color: $dark-grey;
      font-size: 1rem;
      font-weight: 500;
      max-width: 50ch;
    }
  }
}

@media (hover: hover) {
  .view-project-cta {
    transition: 0.17s ease-in;

    &:hover {
      transform: scale(105%) rotate(-15deg);
      box-shadow: $short-shadow;
    }

    &:active {
      transition: 0.07s;
      transform: scale(95%) rotate(-15deg);
    }
  }
}

@media (min-width: 425px) {
  .project-card {
    .view-project-cta {
      margin-bottom: 156px;
      margin-right: 32px;
      height: 32px;
      width: 32px;
      padding: 32px;
      font-size: 18px;
    }

    .project-body {
      height: 148px;

      h1 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.15rem;
      }
    }
  }
}

@media (min-width: 1024px) {
  .project-card {
    .view-project-cta {
      margin-bottom: 128px;
      height: 40px;
      width: 40px;
      padding: 40px;
      font-size: 20px;
    }

    .project-body {
      padding: 1.85rem 2rem 0.75rem 2rem;

      h1 {
        font-size: 2rem;
      }

      h3 {
        font-size: 1.25rem;
      }
    }
  }
}

@keyframes zoom {
  0% {
    transform: translateX(0);
  }
  100% {
    padding-left: 100px;
  }
}
</style>
