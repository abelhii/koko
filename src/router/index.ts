import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import Art from "../views/Art.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects/:id",
    name: "projects",
    component: Project,
  },
  {
    path: "/art",
    name: "art",
    component: Art,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
