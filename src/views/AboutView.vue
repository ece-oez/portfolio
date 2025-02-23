<script setup>
import StackTabs from "../components/StackTabs.vue";
import me from "../assets/img/me.jpg";
import toDo from "../assets/img/do.jpg";
import education from "../assets/img/education.jpg";
import work from "../assets/img/work.jpg";
import future from "../assets/img/future.jpg";
import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();
</script>

<template>
  <section id="aboutme" class="text-stone-600 h-screen bild flex flex-col">
    <div class="h-full w-full flex flex-col justify-evenly items-center">
      <div class="flex flex-col items-center text-6xl">About Me</div>

      <div class="flex justify-around h-2/3">
        <img
          :src="me"
          class="w-1/4 shadow-2xl rounded-2xl slide-in"
          :class="{ hidden: tabStore.currentTab !== 1 }" />

        <img
          :src="toDo"
          class="w-1/4 shadow-2xl rounded-2xl slide-in"
          :class="{ hidden: tabStore.currentTab !== 2 }" />

        <img
          :src="education"
          class="w-1/4 shadow-2xl rounded-2xl slide-in"
          :class="{ hidden: tabStore.currentTab !== 3 }" />

        <img
          :src="work"
          class="w-1/4 shadow-2xl rounded-2xl slide-in"
          :class="{ hidden: tabStore.currentTab !== 4 }" />

        <img
          :src="future"
          class="w-1/4 shadow-2xl rounded-2xl slide-in"
          :class="{ 'hidden slide-out': tabStore.currentTab !== 5 }" />

        <StackTabs></StackTabs>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/about-bg.png);
  /* background-image: url(../assets/img/home-bg.jpg); */
  background-position: center;
  background-size: cover;
}

.bg-me {
  background-image: url(../assets/img/me.jpg);
  background-position: center;
  background-size: cover;
}

.bg-toDo {
  background-image: url(../assets/img/do.jpg);
  background-position: center;
  background-size: cover;
}

.bg-education {
  background-image: url(../assets/img/education.jpg);
  background-position: center;
  background-size: cover;
}

.bg-work {
  background-image: url(../assets/img/work.jpg);
  background-position: center;
  background-size: cover;
}
.bg-future {
  background-image: url(../assets/img/future.jpg);
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
