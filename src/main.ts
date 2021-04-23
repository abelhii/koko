import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import projects from "@/assets/json/projects.json";

createApp(App)
  .use(router)
  .mount("#app");

export const kokoStore = {
  debug: true,
  state: {
    project: {},
  },
  getProjectById(projectId: string) {
    return projects.find((x) => x.id === projectId);
  },
  setCurrentProject(project: any) {
    if (this.debug) console.log("set current project", project);
    this.state.project = project;
  },
  clearCurrentProject() {
    if (this.debug) console.log("clearMessageAction triggered");
    this.state.project = {};
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
