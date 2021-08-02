import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LazyLoadDirective from "./directives/LazyLoadDirective";

import projects from "@/assets/json/projects.json";

createApp(App)
  .directive("lazyload", LazyLoadDirective)
  .use(router)
  .mount("#app");

export const kokoStore = {
  store: {
    projects: projects,
  },
  getProjectById(projectId: string): any {
    return this.store.projects.find((x) => x.id === projectId);
  },
  getNextProject(projectId: string): any {
    const index = this.store.projects.findIndex((x) => x.id === projectId);
    return this.store.projects[index + 1] ?? this.store.projects[0];
  },
  getPrevProject(projectId: string): any {
    const index = this.store.projects.findIndex((x) => x.id === projectId);
    return index - 1 >= 0
      ? this.store.projects[index - 1]
      : this.store.projects[this.store.projects.length - 1];
  },
};

export function scrollMeTo(element: HTMLElement): void {
  const top = element.offsetTop;
  doScrolling(top, 500);
}

// Credits: https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
export function doScrolling(elementY: number, duration: number): void {
  const startingY = window.pageYOffset;
  const diff = elementY - startingY;
  let start: number;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed milliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
