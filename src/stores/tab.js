import { ref } from "vue";
import { defineStore } from "pinia";
import { aboutmeItems } from "@/config/aboutmeItems";

export const useTabStore = defineStore("tab", () => {
  const currentTab = ref(aboutmeItems[0].tab);
  const neighbourTab = ref(null);
  const currentTabUrl = ref(aboutmeItems[0].url);

  return { currentTab, neighbourTab, currentTabUrl };
});
