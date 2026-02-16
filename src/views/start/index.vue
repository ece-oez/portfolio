<script setup>
import landingSection from "@/sections/landing/index.vue";
import aboutSection from "@/sections/about/index.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <landingSection></landingSection>
  <aboutSection></aboutSection>
</template>
<style scoped></style>
