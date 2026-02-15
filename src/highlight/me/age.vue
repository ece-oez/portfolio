<script setup>
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div class="h-screen w-screen gap-30 xl:gap-10 bg-cover bg-center bild">
    <a href="/#about">back</a>
    <button class="bg-blue-200">ME</button>
  </div>
</template>
<style scoped>
.bild {
  background-image:
    linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
}
</style>
