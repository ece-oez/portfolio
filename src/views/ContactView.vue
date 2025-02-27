<script setup>
import TheFooter from "@/components/TheFooter.vue";
import ContactFormular from "../components/ContactFormular.vue";
import TextElement from "@/components/TextElement.vue";
import TheHeading from "@/components/TheHeading.vue";
</script>

<template>
  <section
    id="contact"
    class="text-white bg-hellgrau h-screen w-full flex flex-col">
    <div class="h-full flex flex-col xl:pt-30">
      <div class="xl:flex xl:py-10">
        <div
          class="flex flex-col items-center pt-20 px-20 text-6xl text-stone-600 xl:w-3/4">
          <TheHeading> Contact </TheHeading>
          <TextElement
            class="hidden xl:flex p-20 flex-col text-2xl self-baseline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            accusantium veniam reprehenderit perspiciatis explicabo corrupti
            facilis tempore accusamus sit officia nobis, repudiandae enim, culpa
            delectus velit reiciendis tempora molestiae ratione.
          </TextElement>
        </div>
        <ContactFormular
          class="w-full xl:w-1/2 px-5 py-10 md:px-20 lg:px-40 xl:p-10 flex justify-center"></ContactFormular>
      </div>
      <TheFooter class="p-6 text-center"></TheFooter>
    </div>
  </section>
</template>

<style scoped></style>
