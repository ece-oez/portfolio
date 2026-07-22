<script setup>
import { useLanguageStore } from "@/stores/language";
import { RouterLink } from "vue-router";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div
    class="h-screen w-screen flex flex-row xl:gap-10 bg-cover bg-center bild"
  >
    <a
      class="absolute left-0 bg-red-300 w-1/2 h-full opacity-50 text-center flex items-center justify-center font-bold"
      href="/#aboutme"
      >back</a
    >
    <div class="w-full h-full bg-blue-500 font-bold">Me</div>
    <RouterLink
      class="absolute right-0 bg-red-400 w-1/2 h-full opacity-50 flex items-center justify-center font-bold"
      to="/me/age"
      >next</RouterLink
    >
  </div>
</template>
<style scoped>
/* .bild {
  background-image:
    linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
} */
</style>
