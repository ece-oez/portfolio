<script setup>
import { ref, onMounted } from "vue";
import ProjectCards from "../components/ProjectCards.vue";
import TheHeading from "../components/TheHeading.vue";
import TheArrow from "../components/TheArrow.vue";
import { useProjectItems } from "@/config/projectItemsComposable";
import { skillsItems } from "@/config/skillsItems";
import { icon } from "@fortawesome/fontawesome-svg-core";

const { projectItems } = useProjectItems();

const skillsCardsElements = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("open-card");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("open-card");
  });

  // Tell the observer which elements to track
  observer.observe(skillsCardsElements.value);
});

let projectsIdState = 1;

function slideRight() {
  if (projectsIdState === projectItems.length - 2) {
    return;
  }
  projectsIdState = projectsIdState + 2;
  document.getElementById(projectsIdState).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function slideLeft() {
  if (projectsIdState === 1) {
    return;
  }
  projectsIdState = projectsIdState - 2;
  document.getElementById(projectsIdState).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}
</script>

<template>
  <div class="flex w-full items-center justify-around">
    <TheArrow class="hidden text-6xl lg:flex justify-center cursor-pointer">
      <i
        id="leftArrow"
        class="fa-solid fa-circle-arrow-left hover:text-stone-400 hover:duration-300 not-focus:duration-300"
        @click="slideLeft()"></i>
    </TheArrow>

    <div
      ref="skillsCardsElements"
      class="px-5 py-15 h-full w-full flex flex-row gap-8 overflow-x-scroll scrollbar-hide">
      <div
        v-for="(skillsItem, index) in skillsItems"
        class="border border-stone-400 p-5 rounded-xl bg-inputbox shadow-lg shadow-stone-900 w-700 h-full text-4xl flex flex-col items-center justify-center gap-2">
        <div class="border-b pb-1 w-full text-center">
          {{ skillsItem.text }}
        </div>
        <div class="flex items-center justify-center gap-2 text-sm">
          <i class="bi bi-star-fill border px-0.5 rounded-full"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <i :class="skillsItem.icon" class="text-9xl"></i>
      </div>
    </div>

    <TheArrow class="hidden text-6xl lg:flex justify-center cursor-pointer">
      <i
        id="rightArrow"
        class="fa-solid fa-circle-arrow-right hover:text-stone-400 hover:duration-300 not-focus:duration-300"
        @click="slideRight()"></i>
    </TheArrow>
  </div>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/backgrounds/projekte.png);
  background-position: center;
  background-size: cover;
}

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

.opacity-elements {
  animation-name: opacity-elements;
  animation-duration: 1.5s;
}

@keyframes opacity-elements {
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
