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
</script>
<template>
  <div
    class="w-96 h-150 p-6 border border-neutral-600 rounded-xl hover:duration-300 hover:shadow-xl hover:shadow-neutral-600 hover:scale-105 hover:border-white hover:mx-6 not-focus:duration-300">
    <div class="text-5xl">
      <i :class="props.icon"></i>
    </div>
    <div class="flex justify-between">
      <span class="text-2xl flex justify-center items-center">
        {{ props.title }}
      </span>
      <a :href="props.link">
        <IconsBorder icon="fa-solid fa-link"></IconsBorder>
      </a>
      <a :href="props.github">
        <IconsBorder icon="bi bi-github" />
      </a>
    </div>
    <div class="text-lg mt-6 border-t pt-6 h-65 overflow-hidden">
      {{ props.beschreibung }}
    </div>
    <div class="text-sm flex gap-2">
      <ProjectTags> {{ props.month }}</ProjectTags>
      <ProjectTags> {{ props.year }}</ProjectTags>
    </div>

    <div class="border-t mt-6 flex gap-2 pt-5 text-xl">
      <IconsBorder
        v-for="technology in props.technologies"
        :icon="technology" />
    </div>
  </div>
</template>
<style scoped></style>
