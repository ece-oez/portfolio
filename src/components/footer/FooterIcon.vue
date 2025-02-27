<script setup>
const props = defineProps({
  icon: String,
  link: String,
});
</script>
<template>
  <a :href="props.link" class="flex items-center"
    ><i :class="props.icon"></i>
  </a>
</template>
