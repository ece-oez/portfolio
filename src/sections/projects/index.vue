<script setup>
import { useLanguageStore } from "@/stores/language";
import { useProjectItems } from "@/config/projectItemsComposable";
import { RouterLink } from "vue-router";
import { usePreferredDark } from "@vueuse/core";

const isDark = usePreferredDark();

const { projectItems } = useProjectItems();

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="projects"
    class="max-2xl:h-max h-screen w-screen flex flex-col gap-1 pt-20 max-2xl:pb-10"
  >
    <h1
      class="text-[50px] md:text-[60px] font-bold dark:text-white text-center"
    >
      {{ LanguageStore.textObj.projects.heading }}
    </h1>

    <!-- <h3
      class="md:text-[#ffa468] text-gray-400 text-center text-[20px] md:font-bold md:text-[40px] px-5"
    >
      {{ LanguageStore.textObj.projects.description }}
    </h3> -->

    <div
      class="w-full h-max flex flex-col items-center p-10 gap-8 sm:p-15 sm:gap-10 md:p-30 md:gap-15 lg:p-15 lg:gap-10 lg:grid lg:grid-cols-2 lg:p-30 lg:gap-15 md:p-30 md:gap-15 2xl:p-15 2xl:px-50 2xl:gap-20 2xl:grid-cols-3"
    >
      <div
        v-for="project in projectItems.slice(0, 6)"
        :key="project.id"
        class="group w-full h-100 h-100 border-1 border-stone-200 dark:border-stone-700 rounded-xl flex flex-col text-start hover:shadow-lg dark:shadow-stone-700 hover:scale-105 transition-all duration-400"
      >
        <div
          class="bg-cover bg-center rounded-t-xl h-1/2 transition-all duration-500"
          :style="{
            backgroundImage: `url(${isDark ? project.imgDark : project.img})`,
          }"
        ></div>

        <div
          class="h-2/4 group-hover:h-full w-full p-5 flex flex-col rounded-b-xl bg-white dark:bg-black transition-all duration-500 justify-between"
        >
          <div
            class="md:text-[#ffa468] text-gray-700 dark:text-stone-400 text-[20px] font-bold flex items-center gap-3 h-max"
          >
            <i :class="project.icon"></i>
            <h4
              class="text-[18px] overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {{ project.title }}
            </h4>
          </div>

          <p
            class="w-full text-gray-400 text-[14px] overflow-hidden text-ellipsis whitespace-nowrap group-hover:whitespace-normal h-1/4 group-hover:h-1/2 transition-all duration-500"
          >
            {{ project.beschreibung }}
          </p>

          <div class="flex gap-3 overflow-x-scroll scrollbar-hide h-max">
            <a
              v-for="technologie in project.technologies"
              :href="technologie.link"
              target="_blank"
              class="rounded-2xl flex items-center py-2 px-2 justify-center bg-[#ff8c4023] gap-2 w-max text-[#FF8C40] font-bold text-center"
            >
              <i :class="technologie.icon"></i>
              <!-- {{ technologie.name }} -->
            </a>
          </div>

          <div class="flex gap-3 font-bold w-full h-max">
            <a
              :href="project.github"
              target="_blank"
              class="rounded-xl w-full flex items-center py-2 justify-center gap-2 border-1 bg-[#faf9f6] dark:bg-[#191919] border-[#e5e5e5] hover:border-stone-500 dark:hover:border-stone-200 dark:border-stone-600 text-stone-500 dark:text-stone-200 text-center transition-all duration-500"
            >
              <i class="bi bi-github"></i>

              Code</a
            >
            <a
              :href="project.link"
              target="_blank"
              class="rounded-xl w-full flex items-center py-2 justify-center gap-2 bg-[#FF8C40] dark:bg-[#fe9046] text-white dark:text-black text-center hover:bg-stone-200 dark:hover:bg-[#ffb888] hover:text-black transition-all duration-500"
            >
              <i class="bi bi-eyeglasses"></i>Demo</a
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="hidden flex gap-5 flex-col justify-center md:flex-row w-full px-10"
    >
      <RouterLink
        draggable="none"
        to="/projects"
        class="rounded-xl p-3 w-full md:w-100 border-1 bg-white dark:bg-stone-800 border-[#e5e5e5] hover:border-stone-400 dark:hover:border-stone-200 dark:border-stone-500 text-stone-500 dark:text-stone-200 text-center hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-black dark:hover:text-white transition-all duration-500"
      >
        <!-- {{ LanguageStore.textObj.home.projectBtn }} -->

        Zu allen Projekten
      </RouterLink>
      <a
        draggable="none"
        href="https://github.com/ece-oez?tab=repositories"
        class="rounded-xl p-3 w-full md:w-100 border-1 bg-white dark:bg-stone-800 border-[#e5e5e5] hover:border-stone-400 dark:hover:border-stone-200 dark:border-stone-500 text-stone-500 dark:text-stone-200 text-center hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-black dark:hover:text-white transition-all duration-500"
      >
        <!-- {{ LanguageStore.textObj.home.contactBtn }} -->
        Zu meinen Repositories
      </a>
    </div>
  </section>
</template>
<style scoped></style>
