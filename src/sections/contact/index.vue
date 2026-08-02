<script setup>
import ContactFormular from "@/components/ContactFormular.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="contact"
    class="h-screen w-screen flex flex-col items-center justify-between pt-20 gap-20"
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

    <div class="flex flex-col items-center w-2/3 md:grid md:grid-cols-2">
      <div class="flex flex-col gap-5 p-5">
        <div
          class="flex p-5 items-center border border-stone-300 dark:border-stone-700 bg-white dark:bg-black rounded-xl gap-5"
        >
          <!-- Email -->
          <div
            class="h-full p-3 px-4 bg-[#FF8C40]/20 rounded-xl text-[#FF8C40] text-2xl"
          >
            <i class="bi bi-envelope"></i>
          </div>
          <div class="text-semibold flex flex-col">
            <span class="text-stone-500">{{
              LanguageStore.textObj.contact.info.email
            }}</span>
            <span class="dark:text-white"> oezmen.ece@gmail.com </span>
          </div>
        </div>

        <div
          class="flex p-5 items-center border border-stone-300 dark:border-stone-700 bg-white dark:bg-black rounded-xl gap-5"
        >
          <!-- Telephone -->
          <div
            class="h-full p-3 px-4 bg-[#FF8C40]/20 rounded-xl text-[#FF8C40] text-2xl"
          >
            <i class="bi bi-telephone"></i>
          </div>
          <div class="text-semibold flex flex-col">
            <span class="text-stone-500">{{
              LanguageStore.textObj.contact.info.phone
            }}</span>
            <span class="dark:text-white"> 01773003606 </span>
          </div>
        </div>

        <div
          class="flex p-5 items-center border border-stone-300 dark:border-stone-700 bg-white dark:bg-black rounded-xl gap-5"
        >
          <!-- Geo Data -->
          <div
            class="h-full p-3 px-4 bg-[#FF8C40]/20 rounded-xl text-[#FF8C40] text-2xl"
          >
            <i class="bi bi-geo-alt"></i>
          </div>
          <div class="text-semibold flex flex-col">
            <span class="text-stone-500">{{
              LanguageStore.textObj.contact.info.location.header
            }}</span>
            <span class="dark:text-white">
              Bochum, {{ LanguageStore.textObj.contact.info.location.country }}
            </span>
          </div>
        </div>
      </div>

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
