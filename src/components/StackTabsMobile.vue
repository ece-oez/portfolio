<script setup>
import { ref } from "vue";
import WebPage from "./safari/WebPage.vue";
import WebTab from "./safari/WebTab.vue";
import { aboutmeItems } from "@/config/aboutmeItems";
import SearchTab from "./safari/SearchTab.vue";
import IconsRight from "./safari/IconsRight.vue";
import IconsLeft from "./safari/IconsLeft.vue";
import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();
</script>

<template>
  <div class="w-5/6 lg:w-1/2 bg-white flex flex-col mac-shadow rounded-3xl">
    <WebPage
      v-for="aboutmeItem in aboutmeItems"
      :tab="aboutmeItem.tab"
      :title="aboutmeItem.title"
      :text="aboutmeItem.text" />

    <div
      class="flex w-6/7 p-2 self-center gap-2 overflow-x-scroll scrollbar-hide">
      <SearchTab v-for="aboutmeItem in aboutmeItems" class="w-3/4">
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
</style>
