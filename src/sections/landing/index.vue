<script setup>
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="home"
    class="h-screen w-screen flex items-center justify-center flex-col gap-10"
  >
    <h1 class="text-[50px] md:text-[80px] font-bold dark:text-white">
      {{ LanguageStore.textObj.home.heading }}
      <span class="text-[#FF8C40]"> Ece </span>
    </h1>

    <h3
      class="md:text-[#ffa468] text-stone-600 dark:text-stone-300 text-center text-[25px] w-2/3 md:w-full font-medium md:font-bold md:text-[40px]"
    >
      {{ LanguageStore.textObj.home.secondHeading }}
    </h3>

    <p
      class="text-center  w-100 md:w-150 h-25 flex items-center dark:text-white light:text-stone-500"
    >
      {{ LanguageStore.textObj.home.description }}
    </p>

    <div class="flex gap-5 flex-col md:flex-row">
      <a
        draggable="none"
        href="#projects"
        class="rounded-xl p-3 w-50 bg-[#FF8C40] dark:bg-[#fe9046] text-white dark:text-[#191919] text-center hover:bg-stone-200 dark:hover:bg-[#ffb888] hover:text-black transition-all duration-500"
        >{{ LanguageStore.textObj.home.projectBtn }}</a
      >
      <a
        draggable="none"
        href="#contact"
        class="rounded-xl p-3 w-50 border-1 bg-white dark:bg-stone-800 border-[#e5e5e5] hover:border-stone-500 dark:hover:border-stone-200 dark:border-stone-500 text-stone-500 dark:text-stone-200 text-center hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-black dark:hover:text-white transition-all duration-500"
        >{{ LanguageStore.textObj.home.contactBtn }}</a
      >
    </div>

    <div class="flex gap-10 text-[30px] text-stone-500">
  <a
      class="hover:text-black dark:hover:text-white transition-all duration-500"
      href="https://github.com/ece-oez"
      target="_blank"
      >
      <i class="bi bi-github"></i>

      </a>
      <a
      class="hover:text-black dark:hover:text-white transition-all duration-500"
      href="mailto:oezmen.ece@gmail.com"
      >
      <i class="bi bi-envelope"></i>

      </a>
    </div>
  </section>
</template>
<style scoped></style>
