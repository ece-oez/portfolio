<script setup>
import { reactive, ref, computed } from "vue";
import MenuItems from "./MenuItems.vue";
import IconsBorder from "./IconsBorder.vue";
import { useLanguageStore } from "@/stores/language";

const menuVisibility = ref(false);

function checkForCurrentLanguageGerman() {
  const language = languageStore.currentLanguage;

  if (language === "en") languageStore.currentLanguage = "de";
  else languageStore.currentLanguage = "en";
}

const showMenuState = ref(false);

const languageStore = useLanguageStore();

const menuItemsForMobile = computed(() => {
  return [
    {
      name: languageStore.textObj.navigation.about,
      href: "#aboutme",
      icon: "bi bi-person",
    },
    {
      name: languageStore.textObj.navigation.projects,
      href: "#projects",
      icon: "bi bi-code-slash",
    },
    {
      name: languageStore.textObj.navigation.skills,
      href: "#skills",
      icon: "bi bi-star",
    },
    {
      name: languageStore.textObj.navigation.contact,
      href: "#contact",
      icon: "bi bi-envelope",
    },
  ];
});
</script>
<template>
  <div
    class="top-0 px-5 md:px-10 fixed z-[400] w-full h-15 flex justify-between items-center bg-gradient-to-b dark:from-black/20 dark:to-black/5 light:from-white/20 light:to-white/5 backdrop-blur-xl shadow-xs text-white gap-5"
  >
    <div class="flex items-center w-1/2 xl:w-full">
      <a href="#home" @click="menuVisibility = false" class="select-none">
        <img
          draggable="false"
          src="../assets/img/logo-light.png"
          alt=""
          class="w-20 hidden dark:block"
        />
        <img
          draggable="false"
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
        class="relative text-[17px] w-max h-max py-2 px-3 flex gap-2 cursor-pointer rounded-md text-stone-600 hover:text-black dark:hover:text-white border border-transparent hover:border-stone-600 dark:hover:border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-500"
      >
        <i class="bi bi-translate"></i>
        <span class="w-6">
          {{ languageStore.currentLanguage.toUpperCase() }}
        </span>
      </button>

      <button
        @click="menuVisibility = !menuVisibility"
        class="text-[17px] w-max h-max py-2 px-3 md:hidden flex gap-2 cursor-pointer rounded-md border border-transparent text-stone-600 hover:text-black dark:hover:text-white hover:border-stone-600 dark:hover:border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-500"
      >
        <i v-if="!menuVisibility" class="bi bi-list"></i>
        <i v-if="menuVisibility" class="bi bi-x-lg"></i>
      </button>
    </div>
  </div>

  <Transition name="fade" mode="out-in">
    <div
      @click="menuVisibility = false"
      v-if="menuVisibility"
      :key="menuVisibility"
      class="absolute xl:hidden z-[300] w-screen h-screen bg-gradient-to-b dark:from-black/20 dark:to-black/5 light:from-white/20 light:to-white/5 backdrop-blur-xl"
    ></div>
  </Transition>

  <Transition name="slide-right">
    <div
      :key="menuVisibility"
      v-if="menuVisibility"
      class="absolute xl:hidden pt-15 top-0 right-0 z-[300] p-5 rounded-l-xl shadow-2xl w-1/2 h-screen bg-white dark:bg-black flex flex-col text-xl dark:text-white"
    >
      <a
        @click="menuVisibility = false"
        v-for="item in menuItemsForMobile"
        :href="item.href"
        class="p-4 border-b-1 border-stone-300 dark:border-stone-600"
      >
        {{ item.name }}
      </a>
    </div>
  </Transition>

  <!-- bottom -->
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>
