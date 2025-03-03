<script setup>
import TheTerminal from "@/components/mac/TheTerminal.vue";
import ButtonElements from "@/components/ButtonElement.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section id="home" class="bild text-white h-screen w-full flex flex-col">
    <div class="h-full flex flex-col items-center justify-center pt-20">
      <TheTerminal class="w-2/3 xl:w-1/2" />

      <div
        class="text-neutral-500 text-sm mt-10 xl:mt-0 xl:text-lg h-1/8 xl:h-1/12 w-2/3 xl:w-1/2 flex flex-col xl:flex-row items-center justify-around gap-6 xl:gap-16">
        <ButtonElements
          icon="bi bi-person-plus-fill"
          :text="LanguageStore.textObj.home.contactBtn"
          class="cursor-pointer w-2/4 xl:w-1/4"
          link="#contact" />
        <ButtonElements
          icon="bi bi-arrow-right-short"
          :text="LanguageStore.textObj.home.projectBtn"
          class="cursor-pointer w-2/4 xl:w-1/4"
          link="#projects" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.bild {
  background-image: linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
  background-position: center;
  background-size: cover;
}
</style>
