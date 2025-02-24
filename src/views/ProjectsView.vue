<script setup>
import ProjectTags from "@/components/ProjectTags.vue";
import ProjectCards from "../components/ProjectCards.vue";
import SearchBar from "../components/SearchBar.vue";
import { projectItems } from "../config/projectItems";

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
    <div class="pt-40 xl:pt-30 flex flex-col items-center text-6xl">
      Projects
    </div>
    <div class="flex flex-col gap-3 xl:ms-35">
      <SearchBar class="mx-2" />
      <ProjectTags
        class="cursor-pointer hover:bg-amber-50 hover:duration-300 hover:text-black not-focus:duration-300"
        >Javascript</ProjectTags
      >
    </div>

    <div class="flex h-full w-full items-center justify-around">
      <div class="hidden text-6xl lg:flex justify-center cursor-pointer">
        <i
          id="leftArrow"
          class="fa-solid fa-circle-arrow-left hover:text-stone-400 hover:duration-300 not-focus:duration-300"
          @click="slideLeft()"></i>
      </div>

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

      <div class="hidden text-6xl lg:flex justify-center cursor-pointer">
        <i
          id="rightArrow"
          class="fa-solid fa-circle-arrow-right hover:text-stone-400 hover:duration-300 not-focus:duration-300"
          @click="slideRight()"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/projekte-bg.png);
  /* background-image: url(../assets/img/home-bg.jpg); */
  background-position: center;
  background-size: cover;
}
</style>
