<script setup>
import { ref, onMounted } from "vue";

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Add the animation class
      entries[0].target.classList.add("slide-phone");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.remove("slide-phone");
    entries[0].target.classList.add("scale-0");
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
.slide-phone {
  display: absolute;
  animation-name: slide-phone;
  animation-duration: 1s;
}

@keyframes slide-phone {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (min-width: 1280px) {
  @keyframes slide-phone {
    0% {
      transform: translate(650px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
}
</style>
