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
  <div ref="parentElement">
    <slot> </slot>
  </div>
</template>
<style scoped>
.opacity-anim {
  animation-name: opacity;
  animation-duration: 2s;
}

@keyframes opacity {
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
