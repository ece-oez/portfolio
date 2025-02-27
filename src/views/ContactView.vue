<script setup>
import TheFooter from "@/components/TheFooter.vue";
import ContactFormular from "../components/ContactFormular.vue";
</script>

<template>
  <section
    id="contact"
    class="text-white bg-hellgrau h-screen w-full flex flex-col">
    <div class="h-full flex flex-col xl:pt-30">
      <div class="xl:flex xl:py-10">
        <div
          class="flex flex-col items-center pt-20 px-20 text-6xl text-stone-600 xl:w-3/4">
          Contact
          <div class="hidden xl:flex p-20 flex-col text-2xl self-baseline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            pariatur id non rem ab iusto enim, magnam quas eos explicabo vero,
            architecto et vel consequuntur? Ea eos eveniet quas voluptate!
          </div>
        </div>
        <ContactFormular
          class="w-full xl:w-1/2 p-10 md:px-20 lg:px-40 xl:p-10 flex justify-center"></ContactFormular>
      </div>
      <TheFooter class="p-3"></TheFooter>
    </div>
  </section>
</template>

<style scoped></style>
