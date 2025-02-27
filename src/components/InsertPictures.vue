<script setup>
import me from "../assets/img/me.jpg";
import toDo from "../assets/img/do.jpg";
import education from "../assets/img/education.jpg";
import work from "../assets/img/work.jpg";
import future from "../assets/img/future.jpg";
import { useTabStore } from "@/stores/tab";
import { ref, onMounted } from "vue";

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("open-pic");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("open-pic");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});

const tabStore = useTabStore();
</script>

<template>
  <div
    ref="parentElement"
    class="lg:w-[349px] xl:w-[415px] flex items-center justify-center">
    <img
      :src="me"
      class="shadow-2xl rounded-2xl slide-in"
      :class="{ hidden: tabStore.currentTab !== 1 }" />

    <img
      :src="toDo"
      class="shadow-2xl rounded-2xl slide-in"
      :class="{ hidden: tabStore.currentTab !== 2 }" />

    <img
      :src="education"
      class="shadow-2xl rounded-2xl slide-in"
      :class="{ hidden: tabStore.currentTab !== 3 }" />

    <img
      :src="work"
      class="shadow-2xl rounded-2xl slide-in"
      :class="{ hidden: tabStore.currentTab !== 4 }" />

    <img
      :src="future"
      class="shadow-2xl rounded-2xl slide-in"
      :class="{ hidden: tabStore.currentTab !== 5 }" />
  </div>
</template>

<style scoped>
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

.open-pic {
  animation-name: open-pic;
  animation-duration: 1s;
}

@keyframes open-pic {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
