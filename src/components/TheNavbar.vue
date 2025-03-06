<script setup>
import { ref } from "vue";
import MenuItems from "./MenuItems.vue";
import IconsBorder from "./IconsBorder.vue";
import { useLanguageStore } from "@/stores/language";

const showMenuState = ref(false);

const languageStore = useLanguageStore();

const showTooltip = ref(false);
</script>
<template>
  <div
    class="top-0 fixed bg-navbar z-[9000] opacity-90 text-white w-full h-1/12 flex justify-around">
    <div class="flex items-center w-1/2 xl:w-full">
      <a href="#home" class="select-none">
        <img src="../assets/img/logo.png" alt="" class="w-20" />
      </a>
    </div>

    <button @click="showTooltip = !showTooltip">
      <IconsBorder icon="bi bi-translate"> </IconsBorder>
    </button>

    <div
      v-if="showTooltip"
      class="tooltiptext absolute translate-y-18 border border-stone-600 bg-stone-800 w-30 text-center rounded-lg">
      <div
        @click="(languageStore.currentLanguage = 'de'), (showTooltip = false)"
        class="p-2 rounded-lg cursor-pointer select-none hover:bg-stone-300 hover:text-stone-800">
        Deutsch
      </div>
      <div
        @click="(languageStore.currentLanguage = 'en'), (showTooltip = false)"
        class="p-2 rounded-lg cursor-pointer select-none hover:bg-stone-300 hover:text-stone-800">
        Englisch
      </div>
    </div>

    <MenuItems
      class="w-full h-full uppercase text-md hidden 2xl:flex items-center justify-around" />

    <button @click="showMenuState = !showMenuState" class="xl:hidden">
      <IconsBorder icon="bi bi-list"></IconsBorder>
    </button>

    <MenuItems
      v-if="showMenuState"
      class="absolute right-0 top-17 flex flex-col p-5 gap-2 bg-stone-500 w-1/2 border rounded-2xl border-stone-300" />
  </div>
</template>
<style scoped>
.bg-navbar {
  background-color: #2d2d2d;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
