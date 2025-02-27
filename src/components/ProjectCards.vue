<script setup>
import IconsBorder from "./IconsBorder.vue";
import ProjectTags from "./ProjectTags.vue";

const props = defineProps({
  icon: String,
  title: String,
  link: String,
  github: String,
  beschreibung: String,
  month: String,
  year: String,
  technologies: Array,
});

import { ref, onMounted } from "vue";

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.3) {
      // Add the animation class
      entries[0].target.classList.add("open-card");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("open-card");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>
<template>
  <div
    ref="parentElement"
    class="w-70 h-110 xl:w-96 xl:h-150 p-6 border border-neutral-600 rounded-xl hover:duration-300 hover:shadow-xl hover:shadow-neutral-600 hover:border-white hover:mx-6 not-focus:duration-300">
    <div class="text-5xl">
      <i :class="props.icon"></i>
    </div>

    <div class="flex justify-between">
      <span class="text-md xl:text-2xl flex justify-center items-center">
        {{ props.title }}
      </span>
      <a :href="props.link">
        <IconsBorder icon="fa-solid fa-link" class="text-sm"></IconsBorder>
      </a>
      <a :href="props.github">
        <IconsBorder icon="bi bi-github" class="text-sm" />
      </a>
    </div>

    <div
      class="text-sm xl:text-lg mt-6 border-t pt-6 h-40 xl:h-50 overflow-hidden">
      {{ props.beschreibung }}
    </div>

    <div class="text-xs lg:text-sm flex gap-2">
      <ProjectTags> {{ props.month }}</ProjectTags>
      <ProjectTags> {{ props.year }}</ProjectTags>
    </div>

    <div class="border-t mt-6 flex gap-2 pt-5 text-xl">
      <IconsBorder
        v-for="technology in props.technologies"
        :icon="technology"
        class="text-sm" />
    </div>
  </div>
</template>
<style scoped>
.open-card {
  animation-name: open-card;
  animation-duration: 1s;
}

@keyframes open-card {
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
