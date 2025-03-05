import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";
import { links } from "@/config/links";

export const useModalStore = defineStore("model", () => {
  let modalState = ref(false);
  const showIcons = ref(true);
  const showPics = ref(false);
  let iconLinks = ref("");
  let pictureLinks = ref("");

  function showLinks() {
    iconLinks.value = "";
    pictureLinks.value = "";

    links.icons.forEach((element) => {
      const currentLink = element[0] + ": " + element[1] + ", ";
      iconLinks.value += currentLink;
    });

    links.pictures.forEach((element) => {
      const currentLink = element[0] + ": " + element[1] + ", ";
      pictureLinks.value += currentLink;
    });
  }

  return {
    modalState,
    iconLinks,
    pictureLinks,
    showLinks,
    showIcons,
    showPics,
  };
});
