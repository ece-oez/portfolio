<script setup>
import TheTerminal from "@/components/mac/TheTerminal.vue";
import ButtonElements from "@/components/ButtonElement.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="home"
    class="w-screen h-screen flex flex-col justify-center items-center gap-30 xl:gap-10 bg-cover bg-center bild">
    <TheTerminal />

    <div class="flex flex-col xl:flex-row gap-10 xl:gap-16">
      <ButtonElements
        icon="bi bi-person-plus-fill"
        :text="LanguageStore.textObj.home.contactBtn"
        link="#contact" />
      <ButtonElements
        icon="bi bi-arrow-right-short"
        :text="LanguageStore.textObj.home.projectBtn"
        link="#projects" />
    </div>
  </section>
</template>
<style scoped>
.bild {
  background-image: linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
}
</style>
