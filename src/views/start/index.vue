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
  <div
    class="snap-y overflow-scroll h-screen w-screen scroll-smooth select-none"
  >
    <TheNavbar></TheNavbar>
    <landingSection class="snap-center"></landingSection>
    <aboutSection class="snap-center"></aboutSection>
    <!-- skills -->
    <projectsSection class="snap-center"></projectsSection>
    <contactSection class="snap-center"> </contactSection>
  </div>
</template>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
