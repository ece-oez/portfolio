<script setup>
let props = defineProps({
  icon: String,
  text: String,
});
</script>
<template>
  <button
    class="bg-white w-1/12 h-1/2 rounded-md flex items-center justify-center gap-2">
    {{ props.text }}
    <i :class="props.icon"></i>
  </button>
</template>
