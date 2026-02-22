<script setup>
import { reactive, ref } from "vue";
import MenuItems from "./MenuItems.vue";
import IconsBorder from "./IconsBorder.vue";
import { useLanguageStore } from "@/stores/language";

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
  <!-- top -->
  <div
    class="hidden bg-white top-0 fixed z-[400] blur-xl opacity-10 w-full h-30"
  ></div>
  <div
    class="hidden bg-white top-0 fixed z-[400] blur-xl opacity-10 w-full h-28"
  ></div>
  <div
    class="hidden bg-white top-0 fixed z-[400] blur-xl opacity-10 w-full h-26"
  ></div>
  <div
    class="hidden bg-white top-0 fixed z-[400] blur-lg opacity-20 w-full h-24"
  ></div>
  <div
    class="hidden bg-white top-0 fixed z-[400] blur-lg opacity-20 w-full h-22"
  ></div>
  <div
    class="hidden bg-white top-0 fixed z-[400] blur-lg opacity-20 w-full h-20"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] blur-md opacity-30 w-full h-18"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] blur-md opacity-30 w-full h-16"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] blur-md opacity-30 w-full h-14"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] blur-sm opacity-80 w-full h-12"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] blur-sm opacity-80 w-full h-10"
  ></div>
  <div class="bg-white top-0 fixed z-[400] blur-sm opacity-80 w-full h-8"></div>
  <div class="bg-white top-0 fixed z-[400] opacity-40 w-full h-6"></div>
  <div class="bg-white top-0 fixed z-[400] opacity-40 w-full h-4"></div>
  <div class="bg-white top-0 fixed z-[400] opacity-40 w-full h-2"></div>

  <!-- bottom -->
  <div
    class="hidden bg-white bottom-0 fixed z-[400] blur-xl opacity-10 w-full h-30"
  ></div>
  <div
    class="hidden bg-white bottom-0 fixed z-[400] blur-xl opacity-10 w-full h-28"
  ></div>
  <div
    class="hidden bg-white bottom-0 fixed z-[400] blur-xl opacity-10 w-full h-26"
  ></div>
  <div
    class="hidden bg-white bottom-0 fixed z-[400] blur-lg opacity-20 w-full h-24"
  ></div>
  <div
    class="hidden bg-white bottom-0 fixed z-[400] blur-lg opacity-20 w-full h-22"
  ></div>
  <div
    class="hidden bg-white bottom-0 fixed z-[400] blur-lg opacity-20 w-full h-20"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] blur-md opacity-30 w-full h-18"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] blur-md opacity-30 w-full h-16"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] blur-md opacity-30 w-full h-14"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] blur-sm opacity-80 w-full h-12"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] blur-sm opacity-80 w-full h-10"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] blur-sm opacity-80 w-full h-8"
  ></div>
  <div class="bg-white bottom-0 fixed z-[400] opacity-40 w-full h-6"></div>
  <div class="bg-white bottom-0 fixed z-[400] opacity-40 w-full h-4"></div>
  <div class="bg-white bottom-0 fixed z-[400] opacity-40 w-full h-2"></div>

  <div
    class="top-0 fixed z-[9000] opacity-90 w-full h-15 flex justify-end items-center gap-3 px-8"
  >
    <!-- <div class="flex items-center w-1/2 xl:w-full">
      <a href="#home" class="select-none">
        <img src="../assets/img/logo.png" alt="" class="w-20" />
      </a>
    </div> -->
    <button
      @click="checkForCurrentLanguageGerman()"
      class="text-[17px] w-max h-max py-2 px-1 flex gap-2"
    >
      <i class="bi bi-translate"></i>
      <span>
        {{ languageStore.currentLanguage.toUpperCase() }}
      </span>
    </button>
  </div>

  <!-- bottom -->

  <div
    class="bottom-0 fixed z-[500] opacity-90 w-full h-15 text-2xl text-gray-300 flex justify-center items-center gap-10 px-8"
  >
    <a
      v-for="menuItem in menuItemsForMobile"
      :key="menuItem.name"
      :href="menuItem.href"
    >
      <i :class="menuItem.icon"></i>
    </a>
  </div>
</template>
<style scoped></style>
