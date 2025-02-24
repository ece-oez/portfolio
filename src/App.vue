<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import HomeView from "./views/HomeView.vue";
import IntroView from "./views/IntroView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SkillsView from "./views/SkillsView.vue";
import ContactView from "./views/ContactView.vue";
</script>

<template>
  <TheNavbar
    class="top-0 fixed bg-navbar aldrich-regular z-[9000] opacity-90" />

  <main class="aldrich-regular">
    <HomeView />
    <AboutView />
    <ProjectsView />
    <SkillsView />
    <ContactView />
  </main>
</template>
