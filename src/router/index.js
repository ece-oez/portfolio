import { createRouter, createWebHistory } from "vue-router";
import age from "../highlight/me/age.vue";
import start from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: start,
    },
    {
      path: "/me",
      name: "me",
      children: [
        {
          path: "age",
          component: age,
        },
      ],
    },
  ],
});

export default router;
