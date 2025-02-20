<script setup>
import TheSphere from "../components/TheSphere.vue";
import { skillsItems } from "../config/skillsItems";
</script>

<template>
  <section
    id="skills"
    class="text-white h-screen background w-full flex flex-col">
    <div class="h-full flex flex-col items-center pt-20">
      <TheSphere
        v-for="aboutmeItem in skillsItems"
        :icon="aboutmeItem.icon"
        :icon-width="aboutmeItem.iconWidth"
        :text="aboutmeItem.text"
        :text-width="aboutmeItem.textWidth"
        :class="aboutmeItem.styling">
      </TheSphere>
    </div>
  </section>
</template>

<style scoped>
.background {
  background-color: #1f2020;
}
</style>
