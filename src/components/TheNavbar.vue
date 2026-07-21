<script setup>
import { reactive, ref } from "vue";
import MenuItems from "./MenuItems.vue";
import IconsBorder from "./IconsBorder.vue";
import { useLanguageStore } from "@/stores/language";

function showToolTipFunc() {
  showTooltip.value = true;
}

function checkForCurrentLanguageGerman() {
  const language = languageStore.currentLanguage;

  if (language === "en") languageStore.currentLanguage = "de";
  else languageStore.currentLanguage = "en";
}

const showMenuState = ref(false);

const languageStore = useLanguageStore();

const menuItemsForMobile = reactive([
  { name: "AboutMe", href: "#aboutme", icon: "bi bi-person" },
  { name: "Projects", href: "#projects", icon: "bi bi-code-slash" },
  { name: "Skills", href: "#skills", icon: "bi bi-star" },
  { name: "Contact", href: "#contact", icon: "bi bi-envelope" },
]);

const showTooltip = ref(false);
</script>
<template>
  <div
    class="top-0 px-5 md:px-10 fixed z-[9000] w-full h-15 flex justify-between items-center bg-gradient-to-b dark:from-black/20 dark:to-black/5 light:from-white/20 light:to-white/5 backdrop-blur-xl shadow-xs text-white gap-5"
  >
    <div class="flex items-center w-1/2 xl:w-full">
      <a href="#home" class="select-none">
        <img
          src="../assets/img/logo-light.png"
          alt=""
          class="w-20 hidden dark:block"
        />
        <img
          src="../assets/img/logo-dark.png"
          alt=""
          class="w-20 dark:hidden"
        />
      </a>
    </div>

    <MenuItems class="hidden dark:text-white xl:flex gap-10"></MenuItems>

    <div class="flex gap-2">
      <button
        @click="checkForCurrentLanguageGerman()"
        @hover="showToolTipFunc()"
        class="relative text-[17px] w-max h-max py-2 px-3 flex gap-2 cursor-pointer rounded-md text-stone-600 hover:text-black dark:hover:text-white border border-transparent hover:border-stone-600 dark:hover:border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-500"
      >
        <i class="bi bi-translate"></i>
        <span v-if="showTooltip" class="hidden md:block absolute">
          {{ languageStore.currentLanguage.toUpperCase() }}
        </span>
      </button>

      <button
        class="text-[17px] w-max h-max py-2 px-3 md:hidden flex gap-2 cursor-pointer rounded-md border border-transparent text-stone-600 hover:text-black dark:hover:text-white hover:border-stone-600 dark:hover:border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-500"
      >
        <i class="bi bi-list"></i>
      </button>
    </div>
  </div>

  <!-- bottom -->
</template>
<style scoped></style>
