import { createRouter, createWebHistory } from "vue-router";
import me from "../highlight/me/index.vue";
import age from "../highlight/me/age.vue";
import normalView from "../views/index.vue";

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
      path: "/me/age",
      name: "age",
      component: age,
    },
  ],
});

export default router;
