<script setup>
import { useLanguageStore } from "@/stores/language";
import { useProjectItems } from "@/config/projectItemsComposable";
import { RouterLink } from "vue-router";
import { usePreferredDark } from "@vueuse/core";
import { useSkillsItemsCards } from "@/config/skillsItemsCardsComposable";

const { skillsItemsCards } = useSkillsItemsCards();

const isDark = usePreferredDark();

const { projectItems } = useProjectItems();

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="skills"
    class="max-2xl:h-max h-screen w-screen flex flex-col gap-1 pt-20 max-2xl:pb-10"
  >
    <h1
      class="text-[50px] md:text-[60px] font-bold dark:text-white text-center"
    >
      {{ LanguageStore.textObj.skills.heading }}
    </h1>

    <h3
      class=" text-gray-400 text-center text-[20px] px-5"
    >
      {{ LanguageStore.textObj.skills.text }}
    </h3>

    <div
      class="w-full flex flex-col items-center p-10 gap-8 sm:p-15 sm:gap-10 md:p-30 md:gap-15 lg:p-15 lg:px-40 lg:gap-10 xl:grid xl:grid-cols-2 xl:p-30 xl:gap-15 2xl:p-15 2xl:px-50 2xl:gap-20 2xl:grid-cols-3"
    >
      <!-- Frontend -->
      <div
        class="w-full h-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-black hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF8C40]/20 text-[#FF8C40]"
        >
          <span class="text-3xl">
            <i class="bi bi-code-slash"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-stone-900 dark:text-white">
          {{ skillsItemsCards.frontend.header }}
        </h3>

        <p class="mt-3 text-[23px] text-stone-600 dark:text-stone-400">
          {{ skillsItemsCards.frontend.text }}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in skillsItemsCards.frontend.tech"
            :key="tag.text"
            class="rounded-full bg-stone-100 hover:bg-[#FF8C40]/50 transition-all duration-500 px-4 py-1.5 text-lg text-stone-700 dark:bg-stone-800 dark:text-stone-300"
          >
            {{ tag.text }}
          </span>
        </div>
      </div>

      <!-- Backend -->
      <div
        class="w-full h-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-black hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF8C40]/20 text-[#FF8C40]"
        >
          <span class="text-3xl">
            <i class="bi bi-database"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-stone-900 dark:text-white">
          {{ skillsItemsCards.backend.header }}
        </h3>

        <p class="mt-3 text-[23px] text-stone-600 dark:text-stone-400">
          Node.js, Express, PostgreSQL, MariaDB
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in [
              'Node.js',
              'Express',
              'PHP',
              'C#',
              'PostgreSQL',
              'MariaDB',
              'REST APIs',
              'GraphQL',
            ]"
            :key="tag"
            class=" rounded-full bg-stone-100 hover:bg-[#FF8C40]/50 transition-all duration-500 px-4 py-1.5 text-lg text-stone-700 dark:bg-stone-800 dark:text-stone-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- UI/UX -->
      <div
        class="w-full h-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-black hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF8C40]/20 text-[#FF8C40]"
        >
          <span class="text-3xl">
            <!-- ◉ -->
            <i class="bi bi-window-sidebar"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-stone-900 dark:text-white">
          UI/UX Design
        </h3>

        <p class="mt-3 text-[23px] text-stone-600 dark:text-stone-400">
          Content Creation, User Research, Wireframing, Prototyping
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in [
              'Figma',
              'Frame0',
              'Canva',
              'Confluence',
            ]"
            :key="tag"
            class=" rounded-full bg-stone-100 hover:bg-[#FF8C40]/50 transition-all duration-500 px-4 py-1.5 text-lg text-stone-700 dark:bg-stone-800 dark:text-stone-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Mobile -->
      <div
        class="w-full h-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-black hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF8C40]/20 text-[#FF8C40]"
        >
          <span class="text-3xl">
            <i class="bi bi-phone"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-stone-900 dark:text-white">
          Mobile Development
        </h3>

        <p class="mt-3 text-[23px] text-stone-600 dark:text-stone-400">
          Vue Native, Responsive Design, Mobile First Principle
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in [
              'Vue Native',
              'PWA',
              'Prefix Styling',
              'Mobile-First',
            ]"
            :key="tag"
            class="rounded-full bg-stone-100 hover:bg-[#FF8C40]/50 transition-all duration-500 px-4 py-1.5 text-lg text-stone-700 dark:bg-stone-800 dark:text-stone-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Cloud -->
      <div
        class="w-full h-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-black hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF8C40]/20 text-[#FF8C40]"
        >
          <span class="text-3xl"><i class="bi bi-cloud"></i></span>
        </div>

        <h3 class="text-[28px] font-medium text-stone-900 dark:text-white">
          Cloud & DevOps
        </h3>

        <p class="mt-3 text-[23px] text-stone-600 dark:text-stone-400">
          Docker, CI/CD, Git
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in ['Docker', 'Linux', 'CI/CD', 'Git', 'GitHub Actions']"
            :key="tag"
            class=" rounded-full bg-stone-100 hover:bg-[#FF8C40]/50 transition-all duration-500 px-4 py-1.5 text-lg text-stone-700 dark:bg-stone-800 dark:text-stone-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Performance -->
      <div
        class="w-full h-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-black hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF8C40]/20 text-[#FF8C40]"
        >
          <span class="text-3xl">
            <i class="bi bi-lightning-charge"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-stone-900 dark:text-white">
          Performance
        </h3>

        <p class="mt-3 text-[23px] text-stone-600 dark:text-stone-400">
          Optimization, SEO, Accessibility
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in ['Google PageSpeed Insights', 'Chrome DevTools', 'meta description', 'Caching']"
            :key="tag"
            class=" rounded-full bg-stone-100 hover:bg-[#FF8C40]/50 transition-all duration-500 px-4 py-1.5 text-lg text-stone-700 dark:bg-stone-800 dark:text-stone-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
