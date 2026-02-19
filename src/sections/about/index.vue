<script setup>
import ProjectCards from "@/components/ProjectCards.vue";
import { highlights } from "@/config/highlights";
import { projectItems } from "@/config/projectItems";
import { useLanguageStore } from "@/stores/language";
import { RouterLink } from "vue-router";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="about"
    class="h-screen w-screen flex justify-center flex-col gap-10 md:gap-10"
  >
    <div class="flex gap-5 md:gap-15 px-5 md:px-10">
      <img
        draggable="false"
        class="h-25 w-25 md:h-50 md:w-50 border-1 border-gray-200 rounded-full"
        src="../../assets/img/drawn_profile.jpeg"
        alt=""
      />
      <div class="flex flex-col justify-between">
        <h1 class="font-bold md:text-[50px]">Ece Özmen</h1>

        <div class="flex gap-3 md:gap-20 md:text-[25px]">
          <div class="flex flex-col">
            <h3 class="font-bold">6</h3>
            <p class="">Projects</p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold">2 Years</h3>
            <p class="">Experience</p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold">3</h3>
            <p class="">Clients</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-5 md:px-10">
      <p class="md:text-[19px] text-gray-400 text-start">
        Full Stack Developer
      </p>

      <p class="text-[15px] md:text-[19px] text-start">
        🎮 Spielentwicklung | 🌍 Reisen | 🐾 Tiere
      </p>

      <p class="text-[15px] md:text-[19px] text-start">
        😊 "Lächle jeden Tag, auch wenn es nichts zu lächeln gibt!"
      </p>

      <p class="text-[15px] md:text-[19px] text-start">
        👉 Folge meinen Stories für mehr!
      </p>
    </div>

    <div class="flex gap-2 px-5 md:px-10">
      <a
        href="#projects"
        class="rounded-lg px-3 py-1 md:py-2 w-40 h-max bg-[#FF8C40] text-white text-center"
        >Follow</a
      >
      <a
        href="#contact"
        class="rounded-lg px-3 py-1 md:py-2 w-40 border-1 bg-white border-[#e5e5e5] text-center"
        >Message</a
      >
      <a
        href="#contact"
        class="rounded-lg px-3 py-1 md:py-2 w-40 border-1 bg-white border-[#e5e5e5] text-center"
        >Contact</a
      >
    </div>

    <div
      class="ps-5 md:ps-10 md:pb-5 gap-5 md:gap-10 flex flex-row overflow-x-scroll scrollbar-hide"
    >
      <div
        v-for="(highlight, index) in highlights"
        class="text-center flex flex-col gap-3 md:font-bold"
      >
        <RouterLink
          :to="highlight.link"
          class="w-30 h-30 md:w-58 md:h-58 rounded-full flex flex-col justify-center items-center border-5 md:border-8 border-[#FF8C40]"
        >
          <img
            class="w-25 h-25 md:w-50 md:h-50 rounded-full"
            :src="highlight.img"
            :alt="highlight.title"
          />
        </RouterLink>
        {{ highlight.title }}
      </div>
    </div>
  </section>
</template>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
