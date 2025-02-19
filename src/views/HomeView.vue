<script setup>
import TheTerminal from "@/components/TheTerminal.vue";
import ButtonElements from "@/components/ButtonElement.vue";
</script>

<template>
  <section id="home" class="bild text-white h-screen w-full flex flex-col">
    <div class="h-full flex flex-col items-center justify-center pt-20">
      <TheTerminal />

      <div
        class="text-neutral-500 h-1/12 w-full flex flex-row items-center justify-center gap-16">
        <ButtonElements icon="bi bi-person-plus-fill" text="Contact Me" />
        <ButtonElements icon="bi bi-arrow-right-short" text="To Projects" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.bild {
  background-image: linear-gradient(rgba(31, 32, 32, 0.7), rgba(31, 32, 32, 10)),
    url(../assets/img/home-bg.jpg);
  /* background-image: url(../assets/img/home-bg.jpg); */
  background-position: center;
  background-size: cover;
}
</style>
