<script setup>
import { ref, onMounted } from "vue";

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.9) {
      // Add the animation class
      entries[0].target.classList.add("opacity-anim");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("opacity-anim");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>

<template>
  <div
    ref="parentElement"
    class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
    <slot> </slot>
  </div>
</template>
<style scoped>
.opacity-anim {
  animation-name: opacity;
  animation-duration: 3s;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>
