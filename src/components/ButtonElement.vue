<script setup>
let props = defineProps({
  icon: String,
  text: String,
  link: String,
});
</script>
<template>
  <a
    :href="props.link"
    class="bg-white w-1/12 h-1/2 rounded-md flex items-center justify-center gap-2">
    <button class="cursor-pointer">
      {{ props.text }}
      <i :class="props.icon"></i>
    </button>
  </a>
</template>
