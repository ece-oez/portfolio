<script setup>
import TheFooter from "@/components/TheFooter.vue";
import ContactFormular from "../components/ContactFormular.vue";
import TextElement from "@/components/TextElement.vue";
import TheHeading from "@/components/TheHeading.vue";
import { useLanguageStore } from "@/stores/language";
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();

const LanguageStore = useLanguageStore();
</script>

<template>
  <section
    id="contact"
    class="text-white bg-hellgrau h-screen w-full flex flex-col"
    :class="{ 'opacity-85 blur-lg overflow-y-auto': modalStore.modalState }">
    <div class="h-full flex flex-col xl:pt-30">
      <div class="xl:flex xl:h-2/3">
        <div
          class="flex flex-col items-center pt-20 px-20 text-6xl text-stone-600 xl:w-3/4">
          <TheHeading> {{ LanguageStore.textObj.contact.heading }} </TheHeading>
          <TextElement
            class="hidden xl:flex p-20 flex-col text-2xl self-baseline lg:text-lg xl:text-xl 2xl:text-2xl">
            {{ LanguageStore.textObj.contact.text }}
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
