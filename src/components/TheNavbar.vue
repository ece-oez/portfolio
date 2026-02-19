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
  <!-- top -->
  <!-- <div class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-30"></div> -->
  <!-- <div class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-28"></div> -->
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-26"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-24"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-22"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-20"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-18"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-16"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-14"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-12"
  ></div>
  <div
    class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-10"
  ></div>
  <div class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-8"></div>
  <div class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-6"></div>
  <div class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-4"></div>
  <div class="bg-white top-0 fixed z-[400] opacity-50 blur-xl w-full h-2"></div>

  <!-- bottom -->
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-30"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-28"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-26"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-24"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-22"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-20"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-18"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-16"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-14"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-12"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-10"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-8"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-6"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-4"
  ></div>
  <div
    class="bg-white bottom-0 fixed z-[400] opacity-50 blur-xl w-full h-2"
  ></div>

  <div
    class="top-0 fixed z-[9000] opacity-90 w-full h-1/12 flex justify-end gap-3 px-8"
  >
    <!-- <div class="flex items-center w-1/2 xl:w-full">
      <a href="#home" class="select-none">
        <img src="../assets/img/logo.png" alt="" class="w-20" />
      </a>
    </div> -->

    <button @click="showTooltip = !showTooltip">
      <IconsBorder icon="bi bi-translate"> </IconsBorder>
      <div
        v-if="showTooltip"
        class="tooltiptext absolute -translate-x-[30%] border border-stone-600 bg-stone-800 w-30 text-center rounded-lg"
      >
        <div
          @click="
            ((languageStore.currentLanguage = 'de'), (showTooltip = false))
          "
          class="p-2 rounded-lg cursor-pointer select-none hover:bg-stone-300 hover:text-stone-800"
        >
          Deutsch
        </div>
        <div
          @click="
            ((languageStore.currentLanguage = 'en'), (showTooltip = false))
          "
          class="p-2 rounded-lg cursor-pointer select-none hover:bg-stone-300 hover:text-stone-800"
        >
          Englisch
        </div>
      </div>
    </button>

    <MenuItems
      class="w-full h-full uppercase text-md hidden 2xl:flex items-center justify-around"
    />

    <button @click="showMenuState = !showMenuState" class="xl:hidden">
      <IconsBorder icon="bi bi-list"></IconsBorder>
      <MenuItems
        v-if="showMenuState"
        class="absolute -translate-x-[45%] sm:-translate-x-[35%] flex flex-col gap-2 bg-stone-800 border rounded-2xl border-stone-600"
      />
    </button>
  </div>
</template>
<style scoped>

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
