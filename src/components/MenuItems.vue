<script setup>
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>
<template>
  <div class="flex items-center gap-3">
    <a
      href="/#aboutme"
      class="select-none w-max p-2 px-5 text-md font-medium text-center rounded-md text-stone-400 dark:text-stone-500 hover:text-black dark:hover:text-white transition-all duration-500"
      >{{ LanguageStore.textObj.navigation.about }}</a
    >
    <a
      href="/#projects"
      class="select-none w-max p-2 px-5 text-md font-medium text-center rounded-md text-stone-400 dark:text-stone-500 hover:text-black dark:hover:text-white transition-all duration-500"
      >{{ LanguageStore.textObj.navigation.projects }}</a
    >
    <a
      href="/#skills"
      class="select-none w-max p-2 px-5 text-md font-medium text-center rounded-md text-stone-400 dark:text-stone-500 hover:text-black dark:hover:text-white transition-all duration-500"
      >{{ LanguageStore.textObj.navigation.skills }}</a
    >

    <a
      href="/#contact"
      class="select-none w-max p-2 px-5 text-md font-medium text-center rounded-md text-stone-400 dark:text-stone-500 hover:text-black dark:hover:text-white transition-all duration-500"
      >{{ LanguageStore.textObj.navigation.contact }}</a
    >
  </div>
</template>
<style scoped></style>
