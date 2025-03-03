<script setup>
import { linesItems } from "@/config/linesItems";
import TheSphere from "../components/TheSphere.vue";
import { skillsItems } from "../config/skillsItems";
import { onMounted, ref } from "vue";
import TheHeading from "@/components/TheHeading.vue";
import SkillsCards from "@/components/SkillsCards.vue";

const lines = ref(null);

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
  observer.observe(lines.value);
});
</script>

<template>
  <section
    id="skills"
    class="text-white h-screen bg-hellgrau w-full flex flex-col">
    <div
      class="h-full flex flex-col items-center justify-center 2xl:justify-normal pt-20">
      <TheHeading class="text-stone-600">Skills</TheHeading>

      <div class="hidden 2xl:flex items-center h-full lg:gap-30 w-full">
        <TheSphere
          class="z-50"
          v-for="aboutmeItem in skillsItems"
          :icon="aboutmeItem.icon"
          :icon-width="aboutmeItem.iconWidth"
          :text="aboutmeItem.text"
          :text-width="aboutmeItem.textWidth"
          :class="aboutmeItem.styling">
        </TheSphere>
        <div ref="lines" class="absolute w-full lines-anim">
          <div
            class="absolute left-20 w-420 border-b border-2 border-stone-600"></div>
        </div>
      </div>

      <SkillsCards class="2xl:hidden"></SkillsCards>
    </div>
  </section>
</template>

<style scoped>
.lines-anim {
  animation: lines-animation;
  animation-duration: 3s;
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
