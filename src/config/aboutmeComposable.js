import { useLanguageStore } from "@/stores/language";
import { computed, ref } from "vue";

export function useAboutmeItems() {
  const items = computed(() => {
    const text = useLanguageStore().textObj;
    return [
      {
        tab: 1,
        url: "whoiam.com",
        heading: "I Am",
        title: text.about.aboutme.title,
        text: text.about.aboutme.text,
        icon: "../assets/img/hallo.png",
        picture: "../assets/img/me.jpg",
      },
      {
        tab: 2,
        url: "whatido.com",
        heading: "To Do",
        title: text.about.aboutdo.title,
        text: text.about.aboutdo.text,
        icon: "../assets/img/codierung.png",
        picture: "../assets/img/do.jpg",
      },
      {
        tab: 3,
        url: "whereilearned.com",
        heading: "I Learned @",
        title: text.about.aboutlearned.title,
        text: text.about.aboutlearned.text,
        icon: "../assets/img/lehrbuch.png",
        picture: "../assets/img/education.jpg",
      },
      {
        tab: 4,
        url: "whoiwork.com",
        heading: "I Work For",
        title: text.about.aboutwork.title,
        text: text.about.aboutwork.text,
        icon: "../assets/img/werdegang.png",
        picture: "../assets/img/work.jpg",
      },
      {
        tab: 5,
        url: "whereiwill.com",
        heading: "I Will Be",
        title: text.about.aboutfuture.title,
        text: text.about.aboutfuture.text,
        icon: "../assets/img/work-life-balance.png",
        picture: "../assets/img/future.jpg",
      },
    ];
  });
  return { items };
}
