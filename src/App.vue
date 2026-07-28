<script setup>
import { useModalStore } from "@/stores/modal";
import Portfolio from "@/views/portfolio/index.vue";

const modalStore = useModalStore();
</script>

<template>
  <Portfolio></Portfolio>
</template>
