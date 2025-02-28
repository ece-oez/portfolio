<script setup>
import FooterIcon from "./footer/FooterIcon.vue";

import { onMounted, ref } from "vue";

const footer = ref(false);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Add the animation class
      entries[0].target.classList.add("slide-footer");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("slide-footer");
  });

  // Tell the observer which elements to track
  observer.observe(footer.value);
});
</script>
<template>
  <div
    ref="footer"
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
<style scoped>
.slide-footer {
  animation-name: slide-footer;
  animation-duration: 1s;
}

@media only screen and (min-width: 1440px) {
  @keyframes slide-footer {
    0% {
      transform: translate(0px, 150px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
}
</style>
