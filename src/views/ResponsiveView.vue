<script setup>
import ResponsiveIphone from "@/components/ResponsiveIphone.vue";
import ResponsiveMac from "@/components/ResponsiveMac.vue";
import TextElement from "@/components/TextElement.vue";
import TheHeading from "@/components/TheHeading.vue";
import { useLanguageStore } from "@/stores/language";

const languageStore = useLanguageStore();
</script>

<template>
  <section
    id="responsive"
    class="text-white h-screen flex flex-col justify-center items-center bild">
    <TheHeading class="">{{
      languageStore.textObj.responsive.heading
    }}</TheHeading>
    <TextElement
      class="text-center lg:self-baseline text-xs sm:text-sm lg:text-lg w-full lg:w-3/4 xl:w-2/3">
      {{ languageStore.textObj.responsive.text }}
    </TextElement>
    <div class="flex flex-col lg:flex-row items-center">
      <ResponsiveMac>
        <img src="../assets/img/mac.png" class="w-60 sm:w-100 lg:w-120" />
      </ResponsiveMac>

      <ResponsiveIphone>
        <img
          src="../assets/img/iphone.png"
          class="w-50 sm:w-90 md:w-100 lg:w-120" />
      </ResponsiveIphone>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/backgrounds/responsive.png);
  background-position: center;
  background-size: cover;
}
</style>
