<script setup>
import { ref } from "vue";

let introText = ref("");
</script>

<template>
  <section id="intro" class="text-black w-full bg-white">
    <div class="flex flex-col items-center">
      <div class="text-6xl z-20 font-bold">Introduction</div>
      <div class="w-50 mt-4 border-b-2"></div>
    </div>

    <div class="flex flex-row justify-around h-1/2">
      <div
        class="bg-kacheln w-8 h-8 self-center rounded-full text-white text-2xl text-center">
        <i class="bi bi-caret-left-fill"></i>
      </div>

      <div
        class="bg-neutral-400 w-80 h-80 self-center rounded-4xl flex flex-col items-center justify-center gap-3 first-shadow">
        <div class="text-white text-8xl text-center">
          <i class="bi bi-code-slash"></i>
        </div>
        <div class="text-white text-4xl text-center">
          Frontend <br />
          Developer
        </div>
      </div>

      <div
        class="bg-kacheln w-8 h-8 self-center rounded-full text-white text-2xl text-center">
        <i class="bi bi-caret-right-fill"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-kacheln {
  background-color: #545454;
}

.bg-text {
  color: #545454;
}

@keyframes example {
  from {
    transform: scale(0.75);
  }
  to {
    transform: scale(100);
  }
}
</style>
