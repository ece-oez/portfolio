<script setup>
import landingSection from "@/sections/landing/index.vue";
import aboutSection from "@/sections/about/index.vue";
import projectsSection from "@/sections/projects/index.vue";
import contactSection from "@/sections/contact/index.vue";
import { useLanguageStore } from "@/stores/language";
import TheNavbar from "@/components/TheNavbar.vue";
import { RouterView } from "vue-router";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div
    class="overflow-y-scroll overflow-x-hidden h-screen w-screen scroll-smooth select-none bg-[#faf9f6] dark:bg-[#191919] scrollbar-hide"
  >
    <TheNavbar></TheNavbar>
    <RouterView></RouterView>
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
