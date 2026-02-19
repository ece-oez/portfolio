<script setup>
import landingSection from "@/sections/landing/index.vue";
import aboutSection from "@/sections/about/index.vue";
import projectsSection from "@/sections/projects/index.vue";
import contactSection from "@/sections/contact/index.vue";
import { useLanguageStore } from "@/stores/language";
import TheNavbar from "@/components/TheNavbar.vue";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div class="snap-y snap-proximity">
    <TheNavbar></TheNavbar>
    <landingSection class="snap-center"></landingSection>
    <aboutSection class="snap-center"></aboutSection>
    <!-- skills -->
    <projectsSection class="snap-center"></projectsSection>
    <contactSection class="snap-center"> </contactSection>
  </div>
</template>
<style scoped></style>
