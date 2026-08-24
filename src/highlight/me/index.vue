<script setup>
import reel from "@/components/reel/index.vue";
import { useLanguageStore } from "@/stores/language";
import { RouterLink } from "vue-router";

const LanguageStore = useLanguageStore();
</script>

<template>
  <div
    class="relative w-full h-full overflow-hidden flex flex-col lg:flex-row items-center md:p-5 pt-20"
  >
    <a
      href="/#aboutme"
      class="text-3xl text-stone-500 hover:dark:text-white hover:text-black transition-all duration-500"
    >
      <i class="bi bi-arrow-left-short"></i>
    </a>

    <!-- <div
      class="absolute z-[100] flex items-center justify-end w-full h-full p-20"
    >
      <div
        v-if="true"
        class="bg-[#faf9f6] w-1/3 h-max p-3 flex flex-col justify-between gap-2 overflow-y-scroll text-black rounded-md scrollbar-hide"
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
    </div> -->

    <div class="hidden md:flex h-full p-2 items-end z-[200]">
      <textArea
        placeholder="Hi, Im Ece. Ask me anything."
        class="border text-stone-400 font-semibold p-5 rounded-xl w-150 shadow-md h-max resize-none overflow-auto scrollbar-hide focus:outline-none"
      >
      </textArea>
    </div>

    <div
      class="relative h-max flex flex-row justify-center items-center z-[200]"
    >
      <img
        class="h-140 md:h-120 lg:h-125 xl:h-200"
        src="../../assets/img/me_highlight.png"
        alt=""
      />
      <div class="absolute cursor-pointer top-0 -translate-y-1 text-xl">
        <i class="bi bi-info-circle"></i>
      </div>

      <div class="absolute cursor-pointer top-0 translate-y-20 -translate-x-22">
        <i class="bi bi-info-circle"></i>
        <!-- brille -->
      </div>

      <div class="absolute cursor-pointer top-0 translate-y-15 translate-x-11">
        <i class="bi bi-info-circle"></i>
        <!-- zopf -->
      </div>

      <div
        class="absolute cursor-pointer right-0 -translate-x-10 -translate-y-25"
      >
        <i class="bi bi-info-circle"></i>
        <!-- bücher -->
      </div>

      <div class="absolute cursor-pointer right-0 -translate-x-3">
        <i class="bi bi-info-circle"></i>
        <!-- tasche -->
      </div>

      <div
        class="absolute cursor-pointer left-0 -translate-y-50 translate-x-10"
      >
        <i class="bi bi-info-circle"></i>
        <!-- Coffe -->
      </div>

      <div class="absolute cursor-pointer left-0 translate-y-50">
        <i class="bi bi-info-circle"></i>
        <!-- mantel -->
      </div>

      <div
        class="absolute cursor-pointer bottom-0 -translate-y-10 translate-x-25"
      >
        <i class="bi bi-info-circle"></i>
        <!-- Schuhe -->
      </div>
    </div>

    <div class="h-full p-2 flex items-end justify-center z-[200]">
      <button
        class="border text-stone-400 font-semibold p-3 px-15 rounded-lg w-max shadow-md h-max"
      >
        View my CV
      </button>
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
