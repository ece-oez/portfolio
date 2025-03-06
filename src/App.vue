<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SkillsView from "./views/SkillsView.vue";
import ContactView from "./views/ContactView.vue";
import ResponsiveView from "./views/ResponsiveView.vue";
import TheModal from "../src/components/TheModal.vue";
</script>

<template>
  <TheNavbar />

  <main>
    <HomeView />
    <AboutView />
    <ProjectsView />
    <ResponsiveView />
    <SkillsView />
    <ContactView />
  </main>
  <TheModal></TheModal>
</template>
