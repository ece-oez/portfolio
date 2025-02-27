<script setup>
import { ref, onMounted } from "vue";
import WebPage from "./safari/WebPage.vue";
import WebTab from "./safari/WebTab.vue";
import { aboutmeItems } from "@/config/aboutmeItems";
import SearchTab from "./safari/SearchTab.vue";
import IconsRight from "./safari/IconsRight.vue";
import IconsLeft from "./safari/IconsLeft.vue";
import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("slide-tab");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("slide-tab");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>

<template>
  <div
    ref="parentElement"
    class="bg-white w-2/4 flex flex-col mac-shadow rounded-3xl">
    <div class="w-full h-10 flex justify-around items-center gap-5 p-6">
      <IconsLeft />
      <SearchTab> {{ tabStore.currentTabUrl }} </SearchTab>
      <IconsRight />
    </div>
    <div class="flex mt-2">
      <WebTab
        v-for="aboutmeItem in aboutmeItems"
        :tab="aboutmeItem.tab"
        :heading="aboutmeItem.heading"
        :url="aboutmeItem.url" />
    </div>

    <WebPage
      v-for="aboutmeItem in aboutmeItems"
      :tab="aboutmeItem.tab"
      :title="aboutmeItem.title"
      :text="aboutmeItem.text" />
  </div>
</template>
<style scoped>
.mac-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
.slide-tab {
  animation-name: slide-tab;
  animation-duration: 1s;
}

@keyframes slide-tab {
  0% {
    transform: translate(650px, 0px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
