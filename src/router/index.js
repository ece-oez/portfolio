import { createRouter, createWebHistory } from "vue-router";
import code from "../highlight/code/index.vue";
import food from "../highlight/food/index.vue";
import graduate from "../highlight/graduate/index.vue";
import job from "../highlight/job/index.vue";
import life from "../highlight/life/index.vue";
import pet from "../highlight/pet/index.vue";
import quotes from "../highlight/quotes/index.vue";
import travel from "../highlight/travel/index.vue";
import me from "../highlight/me/index.vue";
import normalView from "../views/start/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: normalView,
    },
    {
      path: "/me",
      name: "me",
      component: me,
    },
    {
      path: "/code",
      name: "code",
      component: code,
    },
    {
      path: "/food",
      name: "food",
      component: food,
    },
    {
      path: "/graduate",
      name: "graduate",
      component: graduate,
    },
    {
      path: "/job",
      name: "job",
      component: job,
    },
    {
      path: "/life",
      name: "life",
      component: life,
    },
    {
      path: "/pet",
      name: "pet",
      component: pet,
    },
    {
      path: "/quotes",
      name: "quotes",
      component: quotes,
    },
    {
      path: "/travel",
      name: "travel",
      component: travel,
    },
  ],
});

export default router;
