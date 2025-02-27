<script setup>
import { linesItems } from "@/config/linesItems";
import TheSphere from "../components/TheSphere.vue";
import { skillsItems } from "../config/skillsItems";
import { onMounted, ref } from "vue";
import TheHeading from "@/components/TheHeading.vue";

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.9) {
      // Add the animation class
      entries[0].target.classList.add("lines-anim");
      return;
    }
    entries[0].target.classList.remove("lines-anim");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>

<template>
  <section
    id="skills"
    class="text-white h-screen bg-hellgrau w-full flex flex-col">
    <div class="h-full flex flex-col items-center pt-20">
      <TheHeading class="text-6xl text-stone-600">Skills</TheHeading>

      <div class="hidden xl:flex items-center h-full lg:gap-30 w-full">
        <TheSphere
          class="z-50"
          v-for="aboutmeItem in skillsItems"
          :icon="aboutmeItem.icon"
          :icon-width="aboutmeItem.iconWidth"
          :text="aboutmeItem.text"
          :text-width="aboutmeItem.textWidth"
          :class="aboutmeItem.styling">
        </TheSphere>
        <div ref="parentElement" class="absolute w-full lines-anim">
          <div
            class="absolute w-1/16 border-b border-2 border-stone-500"
            v-for="linesItem in linesItems"
            :class="linesItem.style"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lines-anim {
  animation: lines-animation;
  animation-duration: 5s;
}

@keyframes lines-animation {
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
