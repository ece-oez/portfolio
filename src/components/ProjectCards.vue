<script setup>
import IconsBorder from "./IconsBorder.vue";
import ProjectTags from "./ProjectTags.vue";

const props = defineProps({
  icon: String,
  title: String,
  link: String,
  beschreibung: String,
  month: String,
  year: String,
  technologies: [],
});
</script>
<template>
  <div
    class="w-100 h-150 border border-neutral-600 rounded-xl hover:bg-amber-300 hover:duration-300 hover:shadow-xl hover:shadow-neutral-600 hover:scale-110 hover:border-amber-100 hover:m-6 not-focus:duration-300">
    <div class="text-5xl m-6">
      <i :class="props.icon"></i>
    </div>
    <div class="m-6 flex justify-between">
      <span class="text-2xl flex justify-center items-center">
        {{ props.title }}
      </span>
      <a :href="props.link">
        <IconsBorder icon="fa-solid fa-link" />
      </a>
    </div>
    <div class="text-lg border-t m-6 pt-6 h-65 overflow-hidden">
      {{ props.beschreibung }}
    </div>
    <div class="text-sm flex gap-2 m-6">
      <ProjectTags> {{ props.month }}</ProjectTags>
      <ProjectTags> {{ props.year }}</ProjectTags>
    </div>

    <div class="border-t m-6 flex gap-2 pt-5 text-xl">
      <IconsBorder
        v-for="technology in props.technologies"
        :icon="technology" />
    </div>
  </div>
</template>
<style scoped></style>
