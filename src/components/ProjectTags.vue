<script setup>
import { onMounted, ref } from "vue";

const tagElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("opacity-elements");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("opacity-elements");
  });

  // Tell the observer which elements to track
  observer.observe(tagElement.value);
});
</script>
<template>
  <div
    ref="tagElement"
    class="border w-min p-1 pl-5 pr-5 rounded-2xl hover:first-shadow select-none">
    <slot></slot>
  </div>
</template>
<style scoped>
.opacity-elements {
  animation-name: opacity-elements;
  animation-duration: 1.5s;
}

@keyframes opacity-elements {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>
