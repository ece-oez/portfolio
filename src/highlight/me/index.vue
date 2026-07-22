<script setup>
import reel from "@/components/reel/index.vue";
import { useLanguageStore } from "@/stores/language";
import { RouterLink } from "vue-router";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div
    class="w-full h-full overflow-hidden flex flex-col lg:flex-row items-center"
  >
    <div class="border p">speech bubble</div>
    <div class="h-max flex flex-row justify-center items-center">
      <img
        class="md:h-120 lg:h-125 xl:h-200"
        src="../../assets/img/me_highlight.png"
        alt=""
      />
    </div>

    <div
      class="hidden w-full flex flex-col justify-between h-max gap-2 overflow-y-scroll"
    >
      <div class="w-full flex justify-between border-b">
        <div>First Name:</div>
        <div>Ece</div>
      </div>
      <div class="w-full flex justify-between border-b">
        <div>Last Name:</div>
        <div>Oezmen</div>
      </div>
      <div class="w-full flex justify-between border-b">
        <div>Age:</div>
        <div>24</div>
      </div>
      <div class="w-full flex justify-between border-b">
        <div>Gender:</div>
        <div>Female</div>
      </div>
      <div class="w-full flex justify-between border-b">
        <div>Height:</div>
        <div>154 cm</div>
      </div>
      <div class="w-full flex justify-between border-b">
        <div>Weight:</div>
        <div>70 kg</div>
      </div>
      <div class="w-full flex justify-between border-b">
        <div>Lieblings Film:</div>
        <div>Avatar</div>
      </div>

      <div class="w-full flex justify-between border-b">
        <div>Lieblings Buch:</div>
        <div>The Last Samurai</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .bild {
  background-image:
    linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/backgrounds/home.jpg);
} */
</style>
