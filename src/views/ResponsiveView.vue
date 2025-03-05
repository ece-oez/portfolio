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
    class="text-white h-screen flex flex-col justify-center items-center gap-2 xl:gap-0 bild">
    <TheHeading class="xl:py-20">{{
      languageStore.textObj.responsive.heading
    }}</TheHeading>
    <TextElement
      class="text-center lg:self-baseline text-xs lg:text-lg w-full lg:w-3/4 xl:w-2/3 px-3 xl:p-0">
      <div>
        {{ languageStore.textObj.responsive.text }}
      </div>
    </TextElement>
    <div class="flex flex-col lg:flex-row items-center">
      <ResponsiveMac>
        <img
          src="../assets/img/mac.png"
          class="w-70 sm:w-90 md:w-100 lg:w-150 max-lg:w-100 2xl:w-150" />
      </ResponsiveMac>

      <ResponsiveIphone>
        <img
          src="../assets/img/iphone.png"
          class="w-60 sm:w-80 md:w-85 lg:w-130 max-lg:w-20 2xl:w-130" />
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
