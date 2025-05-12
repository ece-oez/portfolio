<script setup>
import TheTerminal from "@/components/mac/TheTerminal.vue";
import ButtonElement from "@/components/ButtonElement.vue";
import WindowLayout from "@/components/WindowLayout.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <WindowLayout id="home" class="gap-30 xl:gap-10 bg-cover bg-center bild">
    <TheTerminal />

    <div class="flex flex-col xl:flex-row gap-10 xl:gap-16">
      <ButtonElement
        icon="bi bi-person-plus-fill"
        :text="LanguageStore.textObj.home.contactBtn"
        link="#contact" />
      <ButtonElement
        icon="bi bi-arrow-right-short"
        :text="LanguageStore.textObj.home.projectBtn"
        link="#projects" />
    </div>
  </WindowLayout>
</template>
<style scoped>
.bild {
  background-image: linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
}
</style>
