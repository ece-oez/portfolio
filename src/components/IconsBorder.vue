<script setup>
const props = defineProps({
  icon: String,
});
</script>
<template>
  <div
    class="border border-neutral-600 rounded-xl p-2 pr-3 pl-3 cursor-pointer hover:border-white hover:duration-300 not-focus:duration-300">
    <i :class="props.icon"></i>
  </div>
</template>
