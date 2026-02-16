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
      class="bg-red-400 w-35 text-center flex items-center justify-center font-bold"
      href="/#about"
      >back</a
    >
    <button class="w-40 bg-red-500 font-bold">Me</button>
    <RouterLink
      class="bg-red-400 w-35 flex items-center justify-center font-bold"
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
