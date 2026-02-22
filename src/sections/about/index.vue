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
    id="aboutme"
    class="h-screen w-screen flex justify-center flex-col gap-5 md:gap-10"
  >
    <div class="pb-10 flex flex-col gap-5">
      <h1 class="text-[50px] md:text-[60px] font-bold text-center">
        {{ LanguageStore.textObj.about.heading }}
      </h1>

      <h3 class="text-gray-400 text-center text-[20px] md:text-[40px] px-5">
        {{ LanguageStore.textObj.about.description }}
      </h3>
    </div>

    <div class="flex gap-5 md:gap-15 px-5 md:px-10">
      <img
        draggable="false"
        class="h-20 w-20 md:h-40 md:w-40 border-1 border-gray-200 rounded-full"
        src="../../assets/img/drawn_profile.jpeg"
        alt=""
      />
      <div class="flex flex-col justify-between">
        <h1 class="font-bold md:text-[25px]">Ece Özmen</h1>

        <div class="flex gap-3 md:gap-20 md:text-[25px]">
          <div class="flex flex-col">
            <h3 class="font-bold">6</h3>
            <p class="">{{ LanguageStore.textObj.about.info1 }}</p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold">2 Years</h3>
            <p class="">{{ LanguageStore.textObj.about.info2 }}</p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold">3</h3>
            <p class="">{{ LanguageStore.textObj.about.info3 }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-5 md:px-10">
      <p class="md:text-[19px] text-gray-400 text-start">
        {{ LanguageStore.textObj.about.jobtitle }}
      </p>

      <p class="text-[15px] md:text-[19px] text-start">
        {{ LanguageStore.textObj.about.bio1 }}
      </p>

      <p class="text-[15px] md:text-[19px] text-start">
        "{{ LanguageStore.textObj.about.bio2 }}"
      </p>

      <p class="text-[15px] md:text-[19px] text-start">
        {{ LanguageStore.textObj.about.bio3 }}
      </p>
    </div>

    <div class="flex gap-2 px-5 md:px-10">
      <a
        href="#projects"
        class="rounded-lg px-3 py-1 md:py-2 w-40 h-max bg-[#FF8C40] text-white text-center"
        >{{ LanguageStore.textObj.about.followButton }}</a
      >
      <a
        href="#contact"
        class="rounded-lg px-3 py-1 md:py-2 w-40 border-1 bg-white border-[#e5e5e5] text-center"
        >{{ LanguageStore.textObj.about.messageButton }}</a
      >
      <a
        href="#contact"
        class="rounded-lg px-3 py-1 md:py-2 w-40 border-1 bg-white border-[#e5e5e5] text-center"
        >{{ LanguageStore.textObj.about.contactButton }}</a
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
          class="w-30 h-30 md:w-46 md:h-46 rounded-full flex flex-col justify-center items-center border-5 md:border-8 border-[#FF8C40]"
        >
          <img
            class="w-25 h-25 md:w-40 md:h-40 rounded-full"
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
