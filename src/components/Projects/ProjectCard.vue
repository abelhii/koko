<template>
  <div class="project-card">
    <img src="https://source.unsplash.com/random" alt="Project Image" />
    <router-link
      class="title"
      :to="{ name: 'projects', params: { id: project.id } }"
    >
      <h1>{{ project.title }}</h1>
      <div class="arrow"></div>
    </router-link>
    <h2 class="snippet">
      {{ slicedDescription }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { kokoStore } from "@/main";

export default defineComponent({
  name: "Project Card",
  props: {
    project: {
      id: String,
      title: String,
      description: String,
      route: String,
      required: true,
    } as any,
  },
  computed: {
    slicedDescription(): string | void {
      return this.project.description?.slice(0, 50);
    },
  },
  methods: {
    assignProject() {
      kokoStore.setCurrentProject(this.project);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.project-card {
  --arrow-color: white;
  background-color: $black;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .title {
    cursor: pointer;
    user-select: none;
    display: flex;
    gap: 1rem;
    place-items: center;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    transition: color 0.1s ease-in-out;

    h1 {
      margin: 1rem 0;
    }

    .arrow {
      display: flex;
      align-items: center;
      overflow: hidden;

      &::before {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background-color: var(--arrow-color);
      }
      &::after {
        content: "";
        height: 0;
        width: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;

        border-left: 8px solid var(--arrow-color);
      }
    }

    &:hover .arrow {
      animation: hoverBounce 0.75s infinite linear;
    }

    &:active {
      color: $accent;
    }
    &:active .arrow {
      animation: none;
      &::after {
        border-left: 8px solid $accent;
      }
      &::before {
        background-color: $accent;
        // animation: zoom 0.2s infinite linear;
      }
    }
  }

  .snippet {
    margin: 0;
    color: grey;
    font-weight: 500;
  }
}

@keyframes hoverBounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
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

@media (min-width: 1024px) {
  .project-card {
    img {
      height: 600px;
    }

    .title {
      gap: 2rem;
    }
  }
}
</style>
