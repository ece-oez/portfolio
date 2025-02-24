<script setup>
import { ref } from "vue";
import MenuItems from "./MenuItems.vue";
import IconsBorder from "./IconsBorder.vue";

const showMenuState = ref(false);
</script>
<template>
  <div class="text-white w-full h-1/12 flex justify-around">
    <div class="flex items-center -top-1">Ece</div>

    <MenuItems
      class="xl:text-xl lg:text-lg sm:text-sm uppercase xl:flex items-center justify-around w-full h-full hidden" />

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
</style>
