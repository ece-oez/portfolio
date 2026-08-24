<script setup>
import FooterIcon from "./footer/FooterIcon.vue";
import { useLanguageStore } from "@/stores/language";
import { onMounted, ref } from "vue";
import { useModalStore } from "@/stores/modal";

const LanguageStore = useLanguageStore();

const footer = ref(false);

const modalStore = useModalStore();
</script>
<template>
  <footer
    class="relative bg-stone-950 dark:bg-[#faf9f6] text-stone-300 px-6 py-10 overflow-hidden flex flex-col gap-4 items-center w-full"
  >
    <!-- Decorative blur -->
    <div
      class="absolute -top-20 left-1/2 -translate-x-1/2 w-100 h-60 bg-[#FF8C40]/40 dark:bg-[#FF8C40]/95 blur-3xl rounded-full"
    ></div>

    <div
      class="relative flex flex-col md:flex-row gap-20 max-w-5xl mx-auto h-full w-full"
    >
      <div
        class="flex flex-col w-full text-center text-stone-400 dark:text-stone-500 text-lg md:text-sm gap-5"
      >
        <h1
          class="text-2xl md:text-3xl text-center font-semibold dark:text-black text-white"
        >
          Quick Links
        </h1>
        <div class="flex flex-col gap-2">
          <a href="#home">Home</a>
          <a href="#aboutme">{{ LanguageStore.textObj.navigation.about }}</a>
          <a href="#projects">{{
            LanguageStore.textObj.navigation.projects
          }}</a>
          <a href="#skills">{{ LanguageStore.textObj.navigation.skills }}</a>
          <a href="#contact">{{ LanguageStore.textObj.navigation.contact }}</a>
        </div>
      </div>

      <!-- Logo / Name -->
      <div class="flex flex-col w-full text-center gap-5">
        <h2
          class="text-2xl md:text-3xl font-semibold dark:text-black text-white"
        >
          Ece Özmen
        </h2>

        <p class="text-sm md:text-base text-stone-400 dark:text-stone-500">
          Fullstack Developer | Web Developer
        </p>
      </div>

      <!-- Social Icons -->
      <div class="flex flex-col w-full text-center gap-5">
        <h1
          class="text-2xl md:text-3xl font-semibold dark:text-black text-white"
        >
          Connect
        </h1>
        <div
          class="flex gap-10 text-2xl justify-center text-stone-400 dark:text-stone-400"
        >
          <FooterIcon
            icon="bi bi-envelope-fill"
            link="mailto:oezmen.ece@gmail.com"
            class="footer-icon"
          />

          <FooterIcon
            icon="bi bi-linkedin"
            target="_blank"
            link="https://www.linkedin.com/in/ece-oezmen/"
            class="footer-icon"
          />

          <FooterIcon
            icon="bi bi-github"
            target="_blank"
            link="https://github.com/ece-oez"
            class="footer-icon"
          />
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="w-2/3 md:w-1/2 h-px bg-stone-800 dark:bg-stone-300"></div>

    <!-- Copyright -->
    <div
      class="flex flex-col md:flex-row justify-center items-center w-full text-sm text-stone-500"
    >
      <span>
        {{ LanguageStore.textObj.footer.made }} Ece Özmen © 2026
        {{ LanguageStore.textObj.footer.rights }}
      </span>
    </div>
  </footer>
</template>
<style scoped></style>
