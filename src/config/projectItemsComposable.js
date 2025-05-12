import { useLanguageStore } from "@/stores/language";
import { computed, ref } from "vue";

export function useProjectItems() {
  const projectItems = computed(() => {
    const text = useLanguageStore().textObj;
    return [
      {
        icon: "fa-solid fa-mobile-screen-button",
        title: text.projects.eieruhr.title,
        link: "https://project-eier-uhr.netlify.app/",
        github: "https://github.com/ece-oez/eier_uhr",
        beschreibung: text.projects.eieruhr.beschreibung,
        month: text.projects.eieruhr.month,
        year: "2023",
        technologies: [
          {
            icon: "fa-brands fa-html5",
            name: "HTML",
          },
          {
            icon: "fa-brands fa-css3",
            name: "CSS",
          },
          {
            icon: "fa-brands fa-js",
            name: "Javascript",
          },
        ],
      },
      {
        icon: "fa-solid fa-hand-scissors",
        title: text.projects.scheresteinpapier.title,
        link: "https://project-schere-stein-papier.netlify.app",
        github: "https://github.com/ece-oez/schere_stein_papier",
        beschreibung: text.projects.scheresteinpapier.beschreibung,
        month: text.projects.scheresteinpapier.month,
        year: "2023",
        technologies: [
          {
            icon: "fa-brands fa-html5",
            name: "HTML",
          },
          {
            icon: "fa-brands fa-css3",
            name: "CSS",
          },
          {
            icon: "fa-brands fa-js",
            name: "Javascript",
          },
        ],
      },
      {
        icon: "fa-solid fa-gamepad",
        title: text.projects.whackamole.title,
        link: "https://ece-oez.github.io/whack-a-mole/",
        github: "https://github.com/ece-oez/whack-a-mole",
        beschreibung: text.projects.whackamole.beschreibung,
        month: text.projects.whackamole.month,
        year: "2023",
        technologies: [
          {
            icon: "fa-brands fa-html5",
            name: "HTML",
          },
          {
            icon: "fa-brands fa-css3",
            name: "CSS",
          },
          {
            icon: "fa-brands fa-js",
            name: "Javascript",
          },
        ],
      },
      {
        icon: "bi bi-chat-dots-fill",
        title: text.projects.chatwebapp.title,
        link: "https://eier-uhr.netlify.app",
        github: "https://github.com/ece-oez/chat-web-app",
        beschreibung: text.projects.chatwebapp.beschreibung,
        month: text.projects.chatwebapp.month,
        year: "2024",
        technologies: [
          {
            icon: "fa-brands fa-html5",
            name: "HTML",
          },
          {
            icon: "fa-brands fa-css3",
            name: "CSS",
          },
          {
            icon: "fa-brands fa-js",
            name: "Javascript",
          },
          {
            icon: "fa-brands fa-vuejs",
            name: "VUE.js",
          },
          {
            icon: "fa-solid fa-fire",
            name: "FireBase",
          },
        ],
      },
      {
        icon: "fa-solid fa-book-bookmark",
        title: text.projects.ham.title,
        link: "https://projects-eier-uhr.netlify.app",
        github: "https://github.com/ece-oez/hardware-asset-management",
        beschreibung: text.projects.ham.beschreibung,
        month: text.projects.ham.month,
        year: "2025",
        technologies: [
          {
            icon: "fa-brands fa-html5",
            name: "HTML",
          },
          {
            icon: "fa-brands fa-css3",
            name: "CSS",
          },
          {
            icon: "fa-brands fa-js",
            name: "Javascript",
          },
          {
            icon: "fa-brands fa-vuejs",
            name: "VUE.js",
          },
          {
            icon: "fa-brands fa-node",
            name: "Node",
          },
        ],
      },
    ];
  });
  return { projectItems };
}
