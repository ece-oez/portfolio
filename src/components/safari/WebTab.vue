<script setup>
import { ref } from "vue";
import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();

const props = defineProps({
  tab: Int32Array,
  heading: String,
  picture: String,
  url: String,
});
</script>

<template>
  <div
    @click="
      (tabStore.currentTab = props.tab),
        (tabStore.neighbourTab = props.tab - 1),
        (tabStore.currentTabUrl = props.url)
    "
    class="bg-stone-200 w-full h-10 border-e border-stone-300 flex justify-start items-center gap-2 ps-1 select-none cursor-pointer"
    :class="{
      'bg-white border-none': tabStore.currentTab === props.tab,
      'border-none': tabStore.neighbourTab === props.tab,
    }">
    <img :src="require(`${props.picture}`)" class="w-7" alt="" />
    {{ props.heading }}
  </div>
</template>
