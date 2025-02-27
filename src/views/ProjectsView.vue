<script setup>
import { ref, onMounted } from "vue";
import ProjectTags from "@/components/ProjectTags.vue";
import ProjectCards from "../components/ProjectCards.vue";
import SearchBar from "../components/SearchBar.vue";
import TheHeading from "../components/TheHeading.vue";
import TheArrow from "../components/TheArrow.vue";
import { projectItems } from "../config/projectItems";

const projectElements = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("opacity-elements");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("opacity-elements");
  });

  // Tell the observer which elements to track
  observer.observe(projectElements.value);
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
  <section
    id="projects"
    class="text-white h-screen w-full flex flex-col gap-6 xl:gap-2 bild">
    <TheHeading class="pt-40 xl:pt-30 flex flex-col"> Projects</TheHeading>
    <div ref="projectElements" class="flex flex-col gap-3 xl:ms-35">
      <SearchBar />
      <ProjectTags
        class="cursor-pointer hover:bg-amber-50 hover:duration-300 hover:text-black not-focus:duration-300"
        >Javascript</ProjectTags
      >
    </div>

    <div class="flex w-full items-center justify-around xl:px-4">
      <TheArrow class="hidden text-6xl lg:flex justify-center cursor-pointer">
        <i
          id="leftArrow"
          class="fa-solid fa-circle-arrow-left hover:text-stone-400 hover:duration-300 not-focus:duration-300"
          @click="slideLeft()"></i>
      </TheArrow>

      <div
        class="mx-3 xl:mx-6 pt-5 h-full w-full flex flex-row gap-8 overflow-x-scroll xl:px-12 scrollbar-hide">
        <div v-for="(projectsItem, index) in projectItems">
          <ProjectCards
            :index="index"
            :id="index"
            :icon="projectsItem.icon"
            :title="projectsItem.title"
            :link="projectsItem.link"
            :github="projectsItem.github"
            :beschreibung="projectsItem.beschreibung"
            :month="projectsItem.month"
            :year="projectsItem.year"
            :technologies="projectsItem.technologies"
            class="cursor-pointer" />
        </div>
      </div>

      <TheArrow class="hidden text-6xl lg:flex justify-center cursor-pointer">
        <i
          id="rightArrow"
          class="fa-solid fa-circle-arrow-right hover:text-stone-400 hover:duration-300 not-focus:duration-300"
          @click="slideRight()"></i>
      </TheArrow>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/backgrounds/projekte.png);
  background-position: center;
  background-size: cover;
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
