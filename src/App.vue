<script setup>
import landingSection from "./sections/landing/index.vue";
import aboutSection from "./sections/about/index.vue";
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
</script>

<template>
<landingSection></landingSection>
<aboutSection></aboutSection>
</template>
