import { useLanguageStore } from "@/stores/language";

export function getAboutmeItems() {
  const text = useLanguageStore().textObj;

  return [
    {
      tab: 1,
      url: "whoiam.com",
      heading: "I Am",
      title: "Wer bin ich?",
      text: text.about.aboutme,
      icon: "../assets/img/hallo.png",
      picture: "../assets/img/me.jpg",
    },
    {
      tab: 2,
      url: "whatido.com",
      heading: "To Do",
      title: "Was mache ich?",
      text: text.about.aboutdo,
      icon: "../assets/img/codierung.png",
      picture: "../assets/img/do.jpg",
    },
    {
      tab: 3,
      url: "whereilearned.com",
      heading: "I Learned @",
      title: "Meine Schullaufbahn?",
      text: text.about.aboutlearned,
      icon: "../assets/img/lehrbuch.png",
      picture: "../assets/img/education.jpg",
    },
    {
      tab: 4,
      url: "whoiwork.com",
      heading: "I Work For",
      title: "Mein Beruflicher Werdegang?",
      text: text.about.aboutwork,
      icon: "../assets/img/werdegang.png",
      picture: "../assets/img/work.jpg",
    },
    {
      tab: 5,
      url: "whereiwill.com",
      heading: "I Will Be",
      title: "Wo sehe ich mich in Zukunft?",
      text: text.about.aboutfuture,
      icon: "../assets/img/work-life-balance.png",
      picture: "../assets/img/future.jpg",
    },
  ];
}
