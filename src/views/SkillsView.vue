<script setup>
import { linesItems } from "@/config/linesItems";
import TheSphere from "../components/TheSphere.vue";
import { skillsItems } from "../config/skillsItems";
import { onMounted, ref } from "vue";
import TheHeading from "@/components/TheHeading.vue";
import SkillsCards from "@/components/SkillsCards.vue";
import WindowLayout from "@/components/WindowLayout.vue";

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
  <WindowLayout id="skills" class="text-white justify-end bg-hellgrau">
    <TheHeading class="text-stone-600">Skills</TheHeading>

    <div class="show-bubbles items-center h-[85%] gap-30 w-full">
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

    <SkillsCards class="show-cards"></SkillsCards>
  </WindowLayout>
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

.show-bubbles {
  display: none;
}
.show-cards {
  display: flex;
}

@media only screen and (min-width: 1600px) {
  .show-bubbles {
    display: flex;
  }
  .show-cards {
    display: none;
  }
}
</style>
