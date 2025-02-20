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
  <div class="bg-white w-2/4 flex flex-col mac-shadow rounded-3xl">
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
        :picture="aboutmeItem.picture"
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
</style>
