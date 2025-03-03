<script setup>
import { ref, onMounted } from "vue";
import WebPage from "./safari/WebPage.vue";
import SearchTab from "./safari/SearchTab.vue";

import { useAboutmeItems } from "@/config/aboutmeComposable";

const { items } = useAboutmeItems();

import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("slide-mobile-tab");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("slide-mobile-tab");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>

<template>
  <div
    ref="parentElement"
    class="w-5/6 lg:w-1/2 bg-white flex flex-col mac-shadow rounded-3xl">
    <WebPage
      v-for="aboutmeItem in items"
      :tab="aboutmeItem.tab"
      :title="aboutmeItem.title"
      :text="aboutmeItem.text" />

    <div
      class="flex w-6/7 p-2 self-center gap-2 overflow-x-scroll scrollbar-hide">
      <SearchTab v-for="aboutmeItem in items" class="w-3/4">
        <button @click="tabStore.currentTab = aboutmeItem.tab">
          {{ aboutmeItem.url }}
        </button>
      </SearchTab>
    </div>

    <div class="flex justify-around items-center gap-10 p-2">
      <div class="flex justify-around items-center gap-10">
        <i class="cursor-pointer bi bi-caret-left"></i>
        <i class="cursor-pointer bi bi-caret-right"></i>
      </div>

      <i class="cursor-pointer bi bi-box-arrow-up"></i>
      <i class="bi bi-book"></i>
      <i class="bi bi-copy"></i>
    </div>
  </div>
</template>
<style scoped>
.mac-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}

.slide-mobile-tab {
  animation-name: slide-mobile-tab;
  animation-duration: 1s;
}

@keyframes slide-mobile-tab {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
