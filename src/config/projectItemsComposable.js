import { useLanguageStore } from "@/stores/language";
import { computed, ref } from "vue";

export function useProjectItems() {
  const projectItems = computed(() => {
    const text = useLanguageStore().textObj;
    return [
      {
        icon: "bi bi-toggles",
        title: text.projects.rct.title,
        img: "/img/projects/rct-d.jpg",
        imgDark: "/img/projects/rct-d.jpg",
        link: "",
        github: "https://github.com/ece-oez/remote-config-tool-frontend",
        beschreibung: text.projects.rct.beschreibung,
        month: text.projects.rct.month,
        year: "2025",
        technologies: [
          {
            icon: "fa-brands fa-vuejs",
            name: "Vue.js",
          },
          {
            name: "HTML5",
            icon: "fa-brands fa-html5",
          },
          {
            name: "CSS3",
            icon: "fa-brands fa-css3",
          },
          {
            name: "JavaScript",
            icon: "fa-brands fa-js",
          },
        ],
      },
      {
        icon: "bi bi-chat-dots-fill",
        title: text.projects.chatwebapp.title,
        img: "/img/projects/chat-d.jpg",
        imgDark: "/img/projects/chat-d.jpg",
        link: "",
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
        img: "/img/projects/ham-d.jpg",
        imgDark: "/img/projects/ham-d.jpg",
        link: "",
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
            icon: "",
            name: "PHP",
          },
        ],
      },
      {
        icon: "bi bi-window-stack",
        title: text.projects.nwdb.title,
        img: "/img/projects/network-d.jpg",
        imgDark: "/img/projects/network-d.jpg",
        link: "",
        github: "https://github.com/ece-oez/nexa-monitor",
        beschreibung: text.projects.nwdb.beschreibung,
        month: text.projects.nwdb.month,
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
        ],
      },
      {
        icon: "bi bi-cup-hot",
        title: text.projects.cafebizbize.title,
        img: "/img/projects/cafe-d.jpg",
        imgDark: "/img/projects/cafe-l.jpg",
        link: "",
        github: "https://github.com/ece-oez/bizbize-deluxe-side",
        beschreibung: text.projects.cafebizbize.beschreibung,
        month: text.projects.cafebizbize.month,
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
        ],
      },
      {
        icon: "bi bi-film",
        title: text.projects.filmdb.title,
        img: "/img/projects/filmdb-l.jpg",
        imgDark: "/img/projects/filmdb-l.jpg",
        link: "",
        github: "https://github.com/ece-oez/meine-film-datenbank",
        beschreibung: text.projects.filmdb.beschreibung,
        month: text.projects.filmdb.month,
        year: "2022",
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
            icon: "",
            name: "PHP",
          },
        ],
      },
      {
        icon: "fa-solid fa-mobile-screen-button",
        title: text.projects.eieruhr.title,
        img: "",
        imgDark: "",
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
        img: "",
        imgDark: "",
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
        img: "",
        imgDark: "",
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
        icon: "bi bi-grid-3x3",
        title: text.projects.conwaysgameoflife.title,
        img: "",
        imgDark: "",
        link: "",
        github: "https://github.com/ece-oez/conways-game-of-life",
        beschreibung: text.projects.conwaysgameoflife.beschreibung,
        month: text.projects.conwaysgameoflife.month,
        year: "2022",
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
        icon: "bi bi-gift",
        title: text.projects.wichteln.title,
        img: "",
        imgDark: "",
        link: "",
        github: "https://github.com/ece-oez/wichtel-algorithmus",
        beschreibung: text.projects.wichteln.beschreibung,
        month: text.projects.wichteln.month,
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
        ],
      },
    ];
  });
  return { projectItems };
}
