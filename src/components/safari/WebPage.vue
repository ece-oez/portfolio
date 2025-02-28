<script setup>
import { ref } from "vue";
import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();

const props = defineProps({
  tab: Number,
  title: String,
  text: String,
});
</script>

<template>
  <div
    v-if="tabStore.currentTab === props.tab"
    class="w-full h-full xl:h-full xl:border-t border-stone-300 p-5">
    <h2 class="caveat text-5xl pb-3 border-b-2 border-stone-400">
      {{ props.title }}
    </h2>
    <div class="pt-4 h-4/5 xl:h-full overflow-y-scroll xl:overflow-y-hidden">
      {{ props.text }}
    </div>
  </div>
</template>
<style scoped>
.mac-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
</style>
