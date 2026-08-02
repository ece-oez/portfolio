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
    id="skills"
    class="h-max xl:h-screen w-screen flex flex-col gap-1 pt-20 pb-2 dark:xl:bg-black"
  >
    <h1
      class="text-[50px] md:text-[60px] font-bold dark:text-white text-center"
    >
      {{ LanguageStore.textObj.skills.heading }}
    </h1>

    <h3
      class="md:text-[#ffa468] text-gray-400 text-center text-[20px] md:text-2xl px-5"
    >
      {{ LanguageStore.textObj.skills.text }}
    </h3>

    <div
      class="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent_30%,transparent_70%,rgba(0,0,0,0.9)),url('/img/skills/garage-bg.jpg')] w-full h-[80%]"
    >
      <div
        class="w-full h-full flex flex-col xl:flex-row justify-around items-center p-10"
      >
        <!-- light: bg-white/60 border border-white/40 shadow-xl shadow-black/10 -->
        <div
          class="text-white w-full h-max xl:h-2/3 xl:w-1/3 rounded-xl p-6 backdrop-blur-md border shadow-xl bg-white/5 border-white/10 shadow-black/50"
        >
          <h1>skills</h1>
        </div>

        <div class="flex justify-end items-end h-2/3">
          <img
            class="drop-shadow-[0_25px_35px_rgba(255,140,64,0.35)]"
            src="../../assets/img/car_css.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
