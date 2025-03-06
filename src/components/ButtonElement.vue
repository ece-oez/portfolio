<script setup>
import { ref, onMounted } from "vue";

let props = defineProps({
  icon: String,
  text: String,
  link: String,
});

const homeBtnElements = ref(null);

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
  observer.observe(homeBtnElements.value);
});
</script>
<template>
  <a
    ref="homeBtnElements"
    :href="props.link"
    class="cursor-pointer bg-white hover:bg-stone-500 hover:scale-110 w-70 h-14 rounded-lg xl:rounded-sm flex items-center justify-around xl:justify-center px-10 xl:px-0 gap-4 uppercase text-sm xl:text-md text-neutral-500 hover:text-stone-100 hover:duration-300 not-focus:duration-300">
    {{ props.text }}
    <i :class="props.icon"></i>
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
