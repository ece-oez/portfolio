<script setup>
import ContactFormular from "@/components/ContactFormular.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="contact"
    class="h-screen w-screen flex items-center justify-center flex-col gap-8 p-5"
  >
    <h1 class="text-[50px] md:text-[60px] font-bold">Get In Touch</h1>

    <h3
      class="md:text-[#ffa468] text-gray-400 text-center text-[20px] md:font-bold md:text-[40px]"
    >
      Have a project in mind or just want to say hi? Feel free to reach out!
    </h3>

    <ContactFormular></ContactFormular>

    <!-- <div class="flex gap-10 text-[30px] text-gray-400">
      <i class="bi bi-github"></i>
      <i class="bi bi-envelope"></i>
    </div> -->
  </section>
</template>
<style scoped></style>
