<script setup>
import landingSection from "./sections/landing/index.vue";
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
</script>

<template>
<landingSection></landingSection>
</template>
