<script setup>
const props = defineProps({
  id: String,
  class: String,
});
const styling = `w-screen h-screen flex flex-col justify-center items-center overflow-hidden text-stone-600  ${props.class}`;
</script>

<template>
  <section :id="props.id" :class="styling">
    <slot></slot>
  </section>
</template>
<style scoped></style>
