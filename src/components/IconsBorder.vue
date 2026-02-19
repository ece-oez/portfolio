<script setup>
const props = defineProps({
  icon: String,
  techName: String,
});
</script>
<template>
  <div
    :title="props.techName"
    class="border-1 border-gray-200 text-gray-400 rounded-xl p-2 pr-3 pl-3 cursor-pointer hover:border-gray-400 hover:duration-300 not-focus:duration-300"
  >
    <i :class="props.icon"> </i>
  </div>
</template>
