<script setup>
import StackTabs from "../components/StackTabs.vue";
</script>

<template>
  <section id="aboutme" class="text-stone-600 h-screen bild flex flex-col">
    <div class="h-full w-full flex flex-col justify-evenly items-center">
      <div class="flex flex-col items-center text-6xl">About Me</div>

      <div class="flex justify-around h-2/3">
        <img
          src="../assets/img/aboutMe-picture.jpg"
          class="w-1/4 shadow-2xl rounded-2xl" />

        <StackTabs></StackTabs>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/about-bg.png);
  /* background-image: url(../assets/img/home-bg.jpg); */
  background-position: center;
  background-size: cover;
}
</style>
