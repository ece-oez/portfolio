<script setup lang="ts">
import ThreeDots from "../mac/ThreeDots.vue";
</script>

<template>
  <div class="flex justify-around items-center w-1/3 gap-4">
    <ThreeDots />

    <div class="flex justify-around items-center gap-1.5">
      <i class="cursor-pointer bi bi-layout-text-window"></i>
      <i class="cursor-pointer bi bi-caret-down"></i>
    </div>

    <div class="flex justify-around items-center gap-6">
      <i class="cursor-pointer bi bi-caret-left"></i>
      <i class="cursor-pointer bi bi-caret-right"></i>
    </div>
  </div>
</template>
