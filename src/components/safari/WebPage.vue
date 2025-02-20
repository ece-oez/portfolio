<script setup>
import { ref } from "vue";
import { useTabStore } from "@/stores/tab";

const tabStore = useTabStore();

const props = defineProps({
  tab: String,
  title: String,
  text: String,
});
</script>

<template>
  <div
    v-if="tabStore.currentTab === props.tab"
    class="w-full h-full border-t border-stone-300 p-5">
    <h2 class="caveat text-5xl">{{ props.title }}</h2>
    <h3>{{ props.text }}</h3>
  </div>
</template>
<style scoped>
.mac-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
</style>
