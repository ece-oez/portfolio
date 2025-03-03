import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { textDeutsch } from "@/config/textDeutsch";
import { textEnglish } from "@/config/textEnglisch";

export const useLanguageStore = defineStore("language", () => {
  let currentLanguage = ref("de");

  const textObj = computed(() => {
    if (currentLanguage.value === "de") return textDeutsch;

    if (currentLanguage.value === "en") return textEnglish;
  });

  return { currentLanguage, textObj };
});
