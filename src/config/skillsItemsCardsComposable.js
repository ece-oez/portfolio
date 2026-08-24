import { useLanguageStore } from "@/stores/language";
import { computed, ref } from "vue";

export function useSkillsItemsCards() {
  const skillsItemsCards = computed(() => {
    const text = useLanguageStore().textObj;
    return {
      frontend: {
        header: "Frontend Development",
        text: "Build modern, responsive and intuitive user interfaces.",
        tech: [
          {
            text: "CSS",
            icon: "fa-brands fa-css3",
            ability: text.skills.css.ability,
            description: text.skills.css.description,
            cardType: text.skills.css.cardType,
          },
          {
            text: "Javascript",
            icon: "fa-brands fa-js",
            ability: text.skills.js.ability,
            description: text.skills.js.description,
            cardType: text.skills.js.cardType,
          },
          {
            text: "Typecript",
            icon: "fa-brands fa-js",
            ability: text.skills.js.ability,
            description: text.skills.js.description,
            cardType: text.skills.js.cardType,
          },
          {
            text: "Vue.js",
            icon: "fa-brands fa-vuejs",
            ability: text.skills.vue.ability,
            description: text.skills.vue.description,
            cardType: text.skills.vue.cardType,
          },
          {
            text: "Bootstrap",
            icon: "fa-brands fa-bootstrap",
            ability: text.skills.bootstrap.ability,
            description: text.skills.bootstrap.description,
            cardType: text.skills.bootstrap.cardType,
          },
          {
            text: "Tailwind",
            icon: "fa-brands fa-bootstrap",
            ability: text.skills.bootstrap.ability,
            description: text.skills.bootstrap.description,
            cardType: text.skills.bootstrap.cardType,
          },
          {
            text: "Pinia",
            icon: "fa-brands fa-bootstrap",
            ability: text.skills.bootstrap.ability,
            description: text.skills.bootstrap.description,
            cardType: text.skills.bootstrap.cardType,
          },
          {
            text: "Nuxt",
            icon: "fa-brands fa-bootstrap",
            ability: text.skills.bootstrap.ability,
            description: text.skills.bootstrap.description,
            cardType: text.skills.bootstrap.cardType,
          },
          {
            text: "VueUse",
            icon: "fa-brands fa-bootstrap",
            ability: text.skills.bootstrap.ability,
            description: text.skills.bootstrap.description,
            cardType: text.skills.bootstrap.cardType,
          },
        ],
      },

      backend: {
        header: "Backend Development",
        text: "",
        tech: [
          {
            text: "Node.js",
            icon: "fa-brands fa-node",
            ability: text.skills.node.ability,
            description: text.skills.node.description,
            cardType: text.skills.node.cardType,
          },
        ],
        tech: [
          {
            text: "Express.js",
            icon: "fa-brands fa-node",
            ability: text.skills.node.ability,
            description: text.skills.node.description,
            cardType: text.skills.node.cardType,
          },
        ],

        tech: [
          {
            text: "PostgreSQL",
            icon: "fa-brands fa-node",
            ability: text.skills.node.ability,
            description: text.skills.node.description,
            cardType: text.skills.node.cardType,
          },
        ],

        tech: [
          {
            text: "REST",
            icon: "fa-brands fa-node",
            ability: text.skills.node.ability,
            description: text.skills.node.description,
            cardType: text.skills.node.cardType,
          },
        ],
        tech: [
          {
            text: "GraphQL",
            icon: "fa-brands fa-node",
            ability: text.skills.node.ability,
            description: text.skills.node.description,
            cardType: text.skills.node.cardType,
          },
        ],
      },

      versionControl: {
        header: "Backend Development",
        text: "",
        tech: [
          {
            text: "Git",
            icon: "fa-brands fa-git-alt",
            ability: text.skills.git.ability,
            description: text.skills.git.description,
            cardType: text.skills.git.cardType,
          },
          {
            text: "GitHub",
            icon: "fa-brands fa-github",
            ability: text.skills.github.ability,
            description: text.skills.github.description,
            cardType: text.skills.github.cardType,
          },
          {
            text: "GitLab",
            icon: "fa-brands fa-gitlab",
            ability: text.skills.gitlab.ability,
            description: text.skills.gitlab.description,
            cardType: text.skills.gitlab.cardType,
          },
          {
            text: "BitBucket",
            icon: "fa-brands fa-bitbucket",
            ability: text.skills.bitbucket.ability,
            description: text.skills.bitbucket.description,
            cardType: text.skills.bitbucket.cardType,
          },
        ],
      },

      devOps: {
        header: "Frontend Development",
        text: "",
        tech: [
          {
            text: "Docker",
            icon: "fa-brands fa-docker",
            ability: text.skills.docker.ability,
            description: text.skills.docker.description,
            cardType: text.skills.docker.cardType,
          },
          {
            text: "Linux",
            icon: "fa-brands fa-linux",
            ability: text.skills.linux.ability,
            description: text.skills.linux.description,
            cardType: text.skills.linux.cardType,
          },
          {
            text: "Windows",
            icon: "fa-brands fa-windows",
            ability: text.skills.windows.ability,
            description: text.skills.windows.description,
            cardType: text.skills.windows.cardType,
          },
        ],
      },

      tools: {
        header: "Frontend Development",
        text: "",
        tech: [
          {
            text: "VS Code",
            icon: "bi bi-window",
            ability: text.skills.vscode.ability,
            description: text.skills.vscode.description,
            cardType: text.skills.vscode.cardType,
          },
          {
            text: "Visual Studio",
            icon: "bi bi-window-split",
            ability: text.skills.vstudio.ability,
            description: text.skills.vstudio.description,
            cardType: text.skills.vstudio.cardType,
          },
        ],
      },
    };
  });
  return { skillsItemsCards };
}
