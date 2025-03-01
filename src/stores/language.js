import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { textDeutsch } from "@/config/textDeutsch";
import { textEnglisch } from "@/config/textEnglisch";

export const useLanguageStore = defineStore("language", () => {
  let currentLanguage = ref("de");
  let textObj = ref(textDeutsch);

  function toggleLanguage() {
    if (currentLanguage === "de") currentLanguage = "en";
    if (currentLanguage === "en") currentLanguage = "de";
    checkLanguage();
  }

  function checkLanguage() {
    if (currentLanguage === "de") textObj = textDeutsch;
    if (currentLanguage === "en") textObj = textEnglisch;
  }

  return { toggleLanguage, textObj };
});
