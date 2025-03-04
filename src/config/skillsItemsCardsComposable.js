import { useLanguageStore } from "@/stores/language";
import { computed, ref } from "vue";

export function useSkillsItemsCards() {
  const skillsItemsCards = computed(() => {
    const text = useLanguageStore().textObj;
    return [
      {
        text: "git",
        textWidth: "lg:text-2xl xl:text-3xl",
        icon: "fa-brands fa-git-alt",
        starCount: 9,
        atk: 200,
        def: 400,
        ability: text.skills.git.ability,
        description: text.skills.git.description,
        cardType: text.skills.git.cardType,
      },
      {
        text: "GitHub",
        textWidth: "text-xl",
        icon: "fa-brands fa-github",
        starCount: 9,
        atk: 400,
        def: 400,
        ability: text.skills.github.ability,
        description: text.skills.github.description,
        cardType: text.skills.github.cardType,
      },
      {
        text: "BitBucket",
        textWidth: "text-xl",
        icon: "fa-brands fa-bitbucket",
        starCount: 8,
        atk: 800,
        def: 800,
        ability: text.skills.bitbucket.ability,
        description: text.skills.bitbucket.description,
        cardType: text.skills.bitbucket.cardType,
      },
      {
        text: "GitLab",
        textWidth: "text-xl",
        icon: "fa-brands fa-gitlab",
        starCount: 3,
        atk: 800,
        def: 800,
        ability: text.skills.gitlab.ability,
        description: text.skills.gitlab.description,
        cardType: text.skills.gitlab.cardType,
      },
      {
        text: "Windows",
        textWidth: "text-xl",
        icon: "fa-brands fa-windows",
        starCount: 10,
        atk: 500,
        def: 100,
        ability: text.skills.windows.ability,
        description: text.skills.windows.description,
        cardType: text.skills.windows.cardType,
      },
      {
        text: "Linux",
        textWidth: "text-xl",
        icon: "fa-brands fa-linux",
        starCount: 7,
        atk: 1000,
        def: 1500,
        ability: text.skills.linux.ability,
        description: text.skills.linux.description,
        cardType: text.skills.linux.cardType,
      },
      {
        text: "Docker",
        textWidth: "text-xl",
        icon: "fa-brands fa-docker",
        starCount: 3,
        atk: 600,
        def: 500,
        ability: text.skills.docker.ability,
        description: text.skills.docker.description,
        cardType: text.skills.docker.cardType,
      },
      {
        text: "CSS",
        textWidth: "text-xl",
        icon: "fa-brands fa-css3",
        starCount: 10,
        atk: 250,
        def: 500,
        ability: text.skills.css.ability,
        description: text.skills.css.description,
        cardType: text.skills.css.cardType,
      },
      {
        text: "JS",
        textWidth: "text-xl",
        icon: "fa-brands fa-js",
        starCount: 10,
        atk: 500,
        def: 100,
        ability: text.skills.js.ability,
        description: text.skills.js.description,
        cardType: text.skills.js.cardType,
      },
      {
        text: "Vue",
        textWidth: "text-xl",
        icon: "fa-brands fa-vuejs",
        starCount: 10,
        atk: 900,
        def: 600,
        ability: text.skills.vue.ability,
        description: text.skills.vue.description,
        cardType: text.skills.vue.cardType,
      },
      {
        text: "Node",
        textWidth: "text-xl",
        icon: "fa-brands fa-node",
        starCount: 5,
        atk: 700,
        def: 400,
        ability: text.skills.node.ability,
        description: text.skills.node.description,
        cardType: text.skills.node.cardType,
      },
      {
        text: "Bootstrap",
        textWidth: "text-xl",
        icon: "fa-brands fa-bootstrap",
        starCount: 10,
        atk: 0,
        def: 10,
        ability: text.skills.bootstrap.ability,
        description: text.skills.bootstrap.description,
        cardType: text.skills.bootstrap.cardType,
      },
      {
        text: "VS Code",
        textWidth: "text-xl",
        icon: "bi bi-window",
        starCount: 10,
        atk: 500,
        def: 500,
        ability: text.skills.vscode.ability,
        description: text.skills.vscode.description,
        cardType: text.skills.vscode.cardType,
      },
      {
        text: "Visual Studio",
        textWidth: "text-xl",
        icon: "bi bi-window-split",
        starCount: 4,
        atk: 1500,
        def: 1000,
        ability: text.skills.vstudio.ability,
        description: text.skills.vstudio.description,
        cardType: text.skills.vstudio.cardType,
      },
    ];
  });
  return { skillsItemsCards };
}
