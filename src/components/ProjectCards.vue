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
    class="w-70 h-110 xl:w-96 xl:h-150 p-6 border border-neutral-600 rounded-xl hover:duration-300 hover:shadow-xl hover:shadow-neutral-600 hover:border-white not-focus:duration-300">
    <div class="text-5xl">
      <i :class="props.icon"></i>
    </div>

    <div class="flex justify-between">
      <p class="text-md xl:text-2xl flex justify-start items-center w-2/3">
        {{ props.title }}
      </p>
      <a
        v-if="props.link !== ''"
        title="Demo View"
        target="_blank"
        :href="props.link">
        <IconsBorder icon="bi bi-eye" class="text-md"></IconsBorder>
      </a>
      <a v-if="props.link === ''" title="Demo View">
        <IconsBorder icon="bi bi-eye-slash" class="text-md"></IconsBorder>
      </a>
      <a target="_blank" title="Code View" :href="props.github">
        <IconsBorder icon="bi bi-github" class="text-md" />
      </a>
    </div>

    <div
      class="text-sm xl:text-lg mt-6 border-t pt-6 h-40 xl:h-50 overflow-y-scroll scrollbar-hide">
      {{ props.beschreibung }}
    </div>

    <div class="text-xs lg:text-sm flex gap-2">
      <ProjectTags> {{ props.month }}</ProjectTags>
      <ProjectTags> {{ props.year }}</ProjectTags>
    </div>

    <div class="border-t mt-6 flex gap-2 pt-5 text-xl">
      <IconsBorder
        v-for="technology in props.technologies"
        :icon="technology.icon"
        class="text-sm"
        :techName="technology.name" />
    </div>
  </div>
</template>
<style scoped></style>
