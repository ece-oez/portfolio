<script setup>
import reel from "@/components/reel/index.vue";
import { useLanguageStore } from "@/stores/language";
import { RouterLink } from "vue-router";

const LanguageStore = useLanguageStore();
</script>

<template>
  <reel />
</template>
<style scoped>
/* .bild {
  background-image:
    linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
} */
</style>
