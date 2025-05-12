<script setup>
import StackTabs from "../components/StackTabs.vue";
import StackTabsMobile from "../components/StackTabsMobile.vue";
import TheHeading from "../components/TheHeading.vue";
import { useTabStore } from "@/stores/tab";
import InsertPictures from "@/components/InsertPictures.vue";
import WindowLayout from "@/components/WindowLayout.vue";

const tabStore = useTabStore();
</script>

<template>
  <WindowLayout id="aboutme" class="bild pt-10 gap-2">
    <TheHeading>About Me</TheHeading>

    <div class="w-full flex flex-row justify-around">
      <InsertPictures class="hidden 2xl:flex w-[25%]"></InsertPictures>
      <StackTabs class="hidden xl:flex" />
      <StackTabsMobile class="xl:hidden" />
    </div>
  </WindowLayout>
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
