<script setup>
import { ref, onMounted } from "vue";

const mac = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Add the animation class
      entries[0].target.classList.add("slide-mac");
      return;
    }
    entries[0].target.classList.remove("slide-mac");
  });

  // Tell the observer which elements to track
  observer.observe(mac.value);
});
</script>

<template>
  <div ref="mac">
    <slot> </slot>
  </div>
</template>
<style scoped>
.slide-mac {
  animation-name: slide-mac;
  animation-duration: 1s;
}

@keyframes slide-mac {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (min-width: 1280px) {
  @keyframes slide-mac {
    0% {
      transform: translate(-650px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
}
</style>
