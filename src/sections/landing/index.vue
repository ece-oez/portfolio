<script setup>
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    class="h-screen w-screen flex items-center justify-center flex-col gap-10"
  >
    <h1 class="text-[50px] md:text-[80px] font-bold">
      {{ LanguageStore.textObj.home.heading }}
      <span class="text-[#FF8C40]"> Ece </span>
    </h1>

    <h3
      class="md:text-[#ffa468] text-gray-400 text-center text-[25px] md:font-bold md:text-[40px]"
    >
      {{ LanguageStore.textObj.home.secondHeading }}
    </h3>

    <p class="text-center 2xl:w-150 md:w-150 w-100 text-gray-400">
      {{ LanguageStore.textObj.home.description }}
    </p>

    <div class="flex gap-5">
      <a
        draggable="none"
        href="#projects"
        class="rounded-xl p-3 w-40 bg-[#FF8C40] text-white text-center"
        >{{ LanguageStore.textObj.home.projectBtn }}</a
      >
      <a
        draggable="none"
        href="#contact"
        class="rounded-xl p-3 w-40 border-1 bg-white border-[#e5e5e5] text-center"
        >{{ LanguageStore.textObj.home.contactBtn }}</a
      >
    </div>

    <div class="flex gap-10 text-[30px] text-gray-400">
      <i class="bi bi-github"></i>
      <i class="bi bi-envelope"></i>
    </div>
  </section>
</template>
<style scoped></style>
