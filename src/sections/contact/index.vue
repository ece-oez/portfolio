<script setup>
import ContactFormular from "@/components/ContactFormular.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="contact"
    class="h-screen w-screen flex flex-col items-center justify-between pt-20"
  >
    <div class="flex flex-col items-center">
      <h1 class="text-[50px] md:text-[60px] font-bold dark:text-white">
        Get In Touch
      </h1>

      <h3
        class="md:text-[#ffa468] text-gray-400 text-center text-[20px] md:font-bold md:text-[40px]"
      >
        Have a project in mind or just want to say hi? Feel free to reach out!
      </h3>
    </div>

    <div class="flex flex-col items-center bg-green-500 md:grid md:grid-cols-2">
      <div>some</div>

      <div>
        <ContactFormular></ContactFormular>
      </div>
    </div>

    <div class="w-full h-max">
      <TheFooter></TheFooter>
    </div>
  </section>
</template>
<style scoped></style>
