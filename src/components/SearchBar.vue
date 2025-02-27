<script setup>
import { onMounted, ref } from "vue";

const searchElement = ref(null);

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
  observer.observe(searchElement.value);
});
</script>
<template>
  <input
    ref="searchElement"
    class="border p-3 rounded-2xl xl:w-1/3"
    placeholder="Suche..." />
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
