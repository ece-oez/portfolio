<script setup>
import StackTabs from "../components/StackTabs.vue";
import StackTabsMobile from "../components/StackTabsMobile.vue";
import TheHeading from "../components/TheHeading.vue";
import { useTabStore } from "@/stores/tab";
import InsertPictures from "@/components/InsertPictures.vue";

const tabStore = useTabStore();
</script>

<template>
  <section id="aboutme" class="text-stone-600 h-screen bild flex flex-col">
    <div
      class="h-full w-full pt-15 xl:pt-5 flex flex-col items-center justify-center gap-15">
      <TheHeading>About Me</TheHeading>

      <div class="h-2/3 w-full flex flex-row justify-around">
        <InsertPictures class="hidden lg:flex"></InsertPictures>
        <StackTabs class="xl:flex hidden" />
        <StackTabsMobile class="xl:hidden" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/backgrounds/about.png);
  background-position: center;
  background-size: cover;
}

.slide-in {
  animation-name: slide-in;
  animation-duration: 1s;
}

@keyframes slide-in {
  0% {
    transform: translate(-650px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.slide-out {
  animation-name: slide-out;
  animation-duration: 1s;
}

@keyframes slide-out {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(-600px, 0px);
  }
}
</style>
