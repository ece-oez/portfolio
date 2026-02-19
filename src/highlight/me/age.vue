<script setup>
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div
    class="h-screen w-screen flex flex-row xl:gap-10 bg-cover bg-center bild"
  >
    <RouterLink
      class="bg-red-400 w-35 text-center flex items-center justify-center font-bold"
      to="/me"
      >back</RouterLink
    >
    <button class="w-40 bg-red-500 font-bold">Age</button>
    <a
      href="/#about"
      class="bg-red-400 w-35 flex items-center justify-center font-bold"
      >next</a
    >
  </div>
</template>
<style scoped>
.bild {
  background-image:
    linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
}
</style>
