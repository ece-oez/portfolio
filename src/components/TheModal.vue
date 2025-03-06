<script setup>
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
</script>
<template>
  <div
    v-if="modalStore.modalState"
    class="absolute p-4 sm:left-[8%] md:left-[12%] lg:left-[25%] -translate-y-180 text-xs 2xl:text-sm sm:w-150 2xl:w-250 xl:h-100 rounded-xl opacity-100 bg-white flex flex-col items-center gap-10">
    <div id="modalText">
      <span class="font-bold text-xl">Genutzte Ressourcen</span>
      <div>
        {{ modalStore.iconLinks }}
      </div>
      <div>
        {{ modalStore.pictureLinks }}
      </div>
    </div>

    <button
      @click="modalStore.modalState = false"
      class="border text-stone-500 w-1/2 p-2 rounded-xl cursor-pointer font-bold hover:bg-stone-100 hover:duration-300">
      Schließen
    </button>
    <div class="flex w-full gap-1">
      <!-- <button
        @click="
          (modalStore.showPics = !modalStore.showPics),
            (modalStore.showIcons = !modalStore.showIcons)
        "
        class="border border-stone-900 bg-inputbox text-stone-200 w-1/2 p-2 rounded-xl cursor-pointer font-bold hover:bg-stone-600 hover:duration-300">
        Switch
      </button> -->
    </div>
  </div>
</template>
