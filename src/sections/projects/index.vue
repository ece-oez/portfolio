<script setup>
import { projectItems } from "@/config/projectItems";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    class="h-screen w-screen flex items-center justify-center flex-col gap-5"
  >
    <h1 class="text-[50px] md:text-[60px] font-bold">Featured Projects</h1>

    <h3
      class="md:text-[#ffa468] text-gray-400 text-center text-[20px] md:font-bold md:text-[40px] px-5"
    >
      Here are some of my recent works that showcase my skills and experience.
    </h3>

    <div
      class="w-full overflow-x-scroll h-120 flex flex-row items-center justify-center gap-5 px-5 snap-x snap-proximity"
    >
      <div
        v-for="project in projectItems"
        :key="project.id"
        class="snap-center w-90 h-90"
      >
        <div
          class="w-90 h-90 border-1 bg-white border-gray-200 rounded-xl flex flex-col gap-5 text-start shadow-lg"
        >
          <div class="h-25">
            <img
              class="rounded-t-xl"
              src="../../assets/img/backgrounds/home.jpg"
              alt=""
            />
          </div>

          <div
            class="h-full w-full bg-white p-5 flex flex-col gap-5 rounded-xl"
          >
            <div
              class="md:text-[#ffa468] text-gray-700 text-[20px] font-bold flex items-center gap-3"
            >
              <i :class="project.icon"></i>
              <h4
                class="text-[18px] overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {{ project.title }}
              </h4>
            </div>

            <p
              class="w-full text-gray-400 text-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {{ project.beschreibung }}
            </p>

            <div class="flex gap-3 overflow-scroll">
              <a
                v-for="technologie in project.technologies"
                :href="technologie.link"
                target="_blank"
                class="rounded-2xl flex items-center py-1 px-4 justify-center gap-2 w-max bg-[#ff8c4023] text-[#FF8C40] font-bold text-center"
              >
                <i :class="technologie.icon"></i>
                {{ technologie.name }}
              </a>
            </div>

            <div class="flex gap-3 font-bold">
              <a
                :href="project.github"
                target="_blank"
                class="rounded-xl flex items-center py-2 justify-center gap-2 w-1/3 border-1 bg-white border-[#e5e5e5] text-center"
              >
                <i class="bi bi-github"></i>

                Code</a
              >
              <a
                :href="project.link"
                target="_blank"
                class="rounded-xl flex items-center py-2 justify-center gap-2 w-1/3 bg-[#FF8C40] text-white text-center"
              >
                <i class="bi bi-eyeglasses"></i>Demo</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
