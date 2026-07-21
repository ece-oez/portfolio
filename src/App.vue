<script setup>
import { useModalStore } from "@/stores/modal";
import { RouterView } from "vue-router";
const modalStore = useModalStore();
</script>

<template>
  <RouterView></RouterView>
</template>
