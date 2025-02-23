<script setup>
import { ref } from "vue";
import { useTabStore } from "@/stores/tab";

// Picture imports
import hallo from "../../assets/img/hallo.png";
import work from "../../assets/img/codierung.png";
import learned from "../../assets/img/lehrbuch.png";
import beruf from "../../assets/img/werdegang.png";
import zukunft from "../../assets/img/work-life-balance.png";

const tabStore = useTabStore();

const props = defineProps({
  tab: Int32Array,
  heading: String,
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
    <img v-if="props.tab === 1" :src="hallo" class="w-7" alt="" />
    <img v-if="props.tab === 2" :src="work" class="w-7" alt="" />
    <img v-if="props.tab === 3" :src="learned" class="w-7" alt="" />
    <img v-if="props.tab === 4" :src="beruf" class="w-7" alt="" />
    <img v-if="props.tab === 5" :src="zukunft" class="w-7" alt="" />
    {{ props.heading }}
  </div>
</template>
