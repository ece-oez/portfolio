<script setup>
import { useModalStore } from "@/stores/modal";
import { RouterView } from "vue-router";
import Portfolio from "@/views/start/index.vue";

const modalStore = useModalStore();
</script>

<template>
<Portfolio></Portfolio>
</template>
