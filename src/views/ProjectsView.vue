<script setup>
import ProjectTags from "@/components/ProjectTags.vue";
import ProjectCards from "../components/ProjectCards.vue";
import SearchBar from "../components/SearchBar.vue";
import { projectItems } from "../config/projectItems";
</script>

<template>
  <section id="projects" class="text-white h-screen w-full flex flex-col bild">
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
.bild {
  background-image: url(../assets/img/projekte-bg.png);
  /* background-image: url(../assets/img/home-bg.jpg); */
  background-position: center;
  background-size: cover;
}
</style>
