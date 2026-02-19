<script setup>
import landingSection from "@/sections/landing/index.vue";
import aboutSection from "@/sections/about/index.vue";
import projectsSection from "@/sections/projects/index.vue";
import { useLanguageStore } from "@/stores/language";
import TheNavbar from "@/components/TheNavbar.vue";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div class="snap-y snap-proximity">
    <TheNavbar></TheNavbar>
    <landingSection class="snap-center"></landingSection>
    <aboutSection class="snap-center"></aboutSection>
    <projectsSection class="snap-center"></projectsSection>
  </div>
</template>
<style scoped></style>
