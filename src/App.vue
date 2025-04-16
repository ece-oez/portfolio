<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SkillsView from "./views/SkillsView.vue";
import ContactView from "./views/ContactView.vue";
import ResponsiveView from "./views/ResponsiveView.vue";
import TheModal from "../src/components/TheModal.vue";
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
</script>

<template>
  <TheNavbar />

  <main>
    <HomeView v-if="modalStore.modalState === false" />
    <AboutView v-if="modalStore.modalState === false" />
    <ProjectsView v-if="modalStore.modalState === false" />
    <ResponsiveView v-if="modalStore.modalState === false" />
    <SkillsView v-if="modalStore.modalState === false" />
    <ContactView />
  </main>
  <TheModal></TheModal>
</template>
