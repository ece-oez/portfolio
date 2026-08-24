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
      {{ LanguageStore.textObj.projects.heading }}
    </h1>

    <!-- <h3
      class="md:text-[#ffa468] text-gray-400 text-center text-[20px] md:font-bold md:text-[40px] px-5"
    >
      {{ LanguageStore.textObj.projects.description }}
    </h3> -->

    <div
      class="px-10 flex flex-col sm:grid max-w-7xl grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- Frontend -->
      <div
        class="rounded-2xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
        >
          <span class="text-3xl">
            <i class="bi bi-code-slash"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-slate-900 dark:text-white">
          {{ skillsItemsCards.frontend.header }}
        </h3>

        <p class="mt-3 text-[23px] text-slate-600 dark:text-slate-400">
          {{ skillsItemsCards.frontend.text }}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in skillsItemsCards.frontend.tech"
            :key="tag.text"
            class="rounded-full bg-slate-100 px-4 py-1.5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ tag.text }}
          </span>
        </div>
      </div>

      <!-- Backend -->
      <div
        class="rounded-2xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
        >
          <span class="text-3xl">
            <i class="bi bi-database"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-slate-900 dark:text-white">
          {{ skillsItemsCards.backend.header }}
        </h3>

        <p class="mt-3 text-[23px] text-slate-600 dark:text-slate-400">
          Node.js, Express, PostgreSQL, MariaDB
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in [
              'Node.js',
              'Express',
              'PostgreSQL',
              'MariaDB',
              'REST APIs',
              'GraphQL',
            ]"
            :key="tag"
            class="rounded-full bg-slate-100 px-4 py-1.5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- UI/UX -->
      <div
        class="rounded-2xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
        >
          <span class="text-3xl">
            <!-- ◉ -->
            <i class="bi bi-window-sidebar"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-slate-900 dark:text-white">
          UI/UX Design
        </h3>

        <p class="mt-3 text-[23px] text-slate-600 dark:text-slate-400">
          Figma, Adobe XD, User Research
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in [
              'Figma',
              'Adobe XD',
              'Prototyping',
              'Wireframing',
              'User Testing',
            ]"
            :key="tag"
            class="rounded-full bg-slate-100 px-4 py-1.5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Mobile -->
      <div
        class="rounded-2xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
        >
          <span class="text-3xl">
            <i class="bi bi-phone"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-slate-900 dark:text-white">
          Mobile Development
        </h3>

        <p class="mt-3 text-[23px] text-slate-600 dark:text-slate-400">
          Vue Native, Responsive Design
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in [
              'Vue Native',
              'PWA',
              'Responsive Design',
              'Mobile-First',
            ]"
            :key="tag"
            class="rounded-full bg-slate-100 px-4 py-1.5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Cloud -->
      <div
        class="rounded-2xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
        >
          <span class="text-3xl"><i class="bi bi-cloud"></i></span>
        </div>

        <h3 class="text-[28px] font-medium text-slate-900 dark:text-white">
          Cloud & DevOps
        </h3>

        <p class="mt-3 text-[23px] text-slate-600 dark:text-slate-400">
          AWS, Docker, CI/CD, Git
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub Actions']"
            :key="tag"
            class="rounded-full bg-slate-100 px-4 py-1.5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Performance -->
      <div
        class="rounded-2xl border border-stone-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 hover:scale-105 dark:hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)] duration-300 transition-all"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
        >
          <span class="text-3xl">
            <i class="bi bi-lightning-charge"></i>
          </span>
        </div>

        <h3 class="text-[28px] font-medium text-slate-900 dark:text-white">
          Performance
        </h3>

        <p class="mt-3 text-[23px] text-slate-600 dark:text-slate-400">
          Optimization, SEO, Accessibility
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <span
            v-for="tag in ['Performance', 'SEO', 'Accessibility', 'Web Vitals']"
            :key="tag"
            class="rounded-full bg-slate-100 px-4 py-1.5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
