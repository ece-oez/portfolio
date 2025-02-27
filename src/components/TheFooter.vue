<script setup>
import FooterIcon from "./footer/FooterIcon.vue";
</script>
<template>
  <div
    class="bg-dunkelgrau h-full flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-9">
    <div class="text-sm sm:text-md md:text-lg lg:text-xl">
      © 2025 Ece Özmen. All rights reserved.
    </div>

    <div
      class="w-1/2 xl:w-1/3 flex justify-between items-center text-2xl lg:text-3xl xl:text-5xl">
      <FooterIcon
        icon="bi bi-envelope-fill"
        link="mailto:oezmen.ece@gmail.com" />
      <FooterIcon
        icon="bi bi-linkedin"
        link="https://linkedin.com/in/eceoezmen" />
      <FooterIcon icon="bi bi-github" link="https://github.com/ece-oez" />
      <FooterIcon icon="bi bi-link-45deg" link="oezmen" />
    </div>

    <div class="text-sm sm:text-md md:text-lg lg:text-xl">
      Made by Ece Özmen
    </div>
  </div>
</template>
