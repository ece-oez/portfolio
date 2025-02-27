<script setup>
import { ref, onMounted } from "vue";

let props = defineProps({
  icon: String,
  text: String,
  link: String,
});

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("show-btns");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("show-btns");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>
<template>
  <a
    ref="parentElement"
    :href="props.link"
    class="bg-white w-1/12 h-1/2 rounded-md flex items-center justify-center gap-2">
    <button class="cursor-pointer">
      {{ props.text }}
      <i :class="props.icon"></i>
    </button>
  </a>
</template>
<style scoped>
.show-btns {
  animation-name: show-btns;
  animation-duration: 2s;
}

@keyframes show-btns {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
