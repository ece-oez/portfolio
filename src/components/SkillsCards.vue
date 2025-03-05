<script setup>
import { ref, onMounted } from "vue";
import TheArrow from "../components/TheArrow.vue";
import { skillsTextCards } from "@/config/skillsTextCards";
import { useSkillsItemsCards } from "@/config/skillsItemsCardsComposable";

const { skillsItemsCards } = useSkillsItemsCards();

const skillsCardsElements = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("open-card");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("open-card");
  });

  // Tell the observer which elements to track
  observer.observe(skillsCardsElements.value);
});

let skillsIdState = 1;

function slideRight() {
  if (skillsIdState === skillsTextCards.length - 2) {
    return;
  }
  skillsIdState = skillsIdState + 2;
  document.getElementById(skillsTextCards[skillsIdState].text).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function slideLeft() {
  if (skillsIdState === 1) {
    return;
  }
  skillsIdState = skillsIdState - 2;
  document.getElementById(skillsTextCards[skillsIdState].text).scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}
</script>

<template>
  <div class="flex w-full items-center justify-around">
    <TheArrow
      class="hidden text-6xl lg:flex justify-center cursor-pointer text-shadow-500">
      <i
        id="leftArrow"
        class="fa-solid fa-circle-arrow-left text-stone-600 hover:text-stone-400 hover:duration-300 not-focus:duration-300"
        @click="slideLeft()"></i>
    </TheArrow>

    <div
      ref="skillsCardsElements"
      class="xl:px-12 px-5 py-15 h-full w-full flex flex-row gap-8 overflow-x-scroll scrollbar-hide snap-x">
      <!-- cards -->
      <div
        v-for="skillsItem in skillsItemsCards"
        :id="skillsItem.text"
        class="snap-center h-140 xl:w-96 xl:h-150 p-5 rounded-lg bg-inputbox shadow-lg shadow-stone-500 text-4xl flex flex-col items-center gap-2">
        <div
          class="border border-b-2 border-r-2 border-b-stone-600 border-r-stone-600 shadow-2xl rounded-lg pb-1 w-[300px] text-center">
          {{ skillsItem.text }}
        </div>
        <div class="w-full flex justify-end gap-2 text-sm">
          <i v-for="n in 10 - skillsItem.starCount" class="bi bi-star-fill"></i>
          <i
            v-for="n in skillsItem.starCount"
            class="bi bi-star-fill text-yellow-300"></i>
        </div>
        <div
          class="w-full h-[250px] lg:h-[350px] rounded-sm shadow-lg shadow-stone-700 text-9xl flex items-center justify-center bg-stone-900 border border-t-stone-400 border-s-stone-400 border-b border-e border-b-stone-600 border-r-stone-600">
          <div
            class="bg-inputbox w-[90%] h-[90%] flex items-center justify-center rounded-sm">
            <i :class="skillsItem.icon"></i>
          </div>
        </div>
        <div class="text-xs text-start w-full">
          {{ skillsItem.ability }}
        </div>
        <div
          class="text-lg bg-stone-400 text-stone-600 rounded-md w-full h-2/5 lg:h-2/4 flex items-center justify-center">
          <div class="bg-white w-[95%] h-[90%] rounded-md p-2 flex flex-col">
            <div>[ {{ skillsItem.cardType }} ]</div>
            <div class="text-sm">{{ skillsItem.description }}</div>

            <div class="border-t flex gap-2 text-xs justify-end items-end">
              <div>ATK/ {{ skillsItem.atk }}</div>
              <div>DEF/ {{ skillsItem.def }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TheArrow class="hidden text-6xl lg:flex justify-center cursor-pointer">
      <i
        id="rightArrow"
        class="fa-solid fa-circle-arrow-right text-stone-600 hover:text-stone-400 hover:duration-300 not-focus:duration-300"
        @click="slideRight()"></i>
    </TheArrow>
  </div>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/backgrounds/projekte.png);
  background-position: center;
  background-size: cover;
}

.open-card {
  animation-name: open-card;
  animation-duration: 1s;
}

@keyframes open-card {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.opacity-elements {
  animation-name: opacity-elements;
  animation-duration: 1.5s;
}

@keyframes opacity-elements {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>
