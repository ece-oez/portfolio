<script setup>
import ProjectTags from "@/components/ProjectTags.vue";
import ProjectCards from "../components/ProjectCards.vue";
import SearchBar from "../components/SearchBar.vue";
import { projectItems } from "../config/projectItems";
</script>

<template>
  <section id="projects" class="text-white h-screen w-full flex flex-col">
    <div class="flex flex-col items-center pt-20 text-6xl">My Projects</div>
    <SearchBar class="ms-6 mb-3 mt-3" />
    <ProjectTags
      class="ml-6 cursor-pointer hover:bg-amber-50 hover:duration-300 hover:text-black not-focus:duration-300"
      >Javascript</ProjectTags
    >
    <div class="flex h-full w-full items-center justify-center">
      <div class="text-6xl w-30 flex justify-center cursor-pointer">
        <i class="fa-solid fa-circle-arrow-left"></i>
      </div>

      <div class="mx-6 pt-5 h-full flex gap-3 overflow-hidden">
        <ProjectCards
          v-for="projectsItem in projectItems"
          :icon="projectsItem.icon"
          :title="projectsItem.title"
          :link="projectsItem.link"
          :beschreibung="projectsItem.beschreibung"
          :month="projectsItem.month"
          :year="projectsItem.year"
          :technologies="projectsItem.technologies" />
      </div>
      <div class="text-6xl w-30 flex justify-center cursor-pointer">
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background {
  background-color: #1f2020;
}
</style>
