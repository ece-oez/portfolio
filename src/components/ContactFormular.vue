<script setup>
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
</script>
<template>
  <div class="w-full h-max">
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="w-full h-max flex flex-col gap-5 p-5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-black shadow-md dark:shadow-stone-800"
    >
      <input type="hidden" name="access_key" :value="accessKey" />

      <label for="name" class="text-gray-400 font-bold">
        {{ LanguageStore.textObj.form.name.label }}</label
      >
      <input
        type="text"
        name="name"
        :placeholder="LanguageStore.textObj.form.name.placeholder"
        class="outline-none focus:border-stone-800 focus:shadow-lg dark:focus:dark:shadow-stone-700 dark:focus:border-stone-300 bg-[#f3f3f5] dark:bg-[#2B2B2F] text-stone-500 dark:text-[#EAEAEA] p-2 px-5 rounded-lg border border-stone-300 dark:border-stone-600"
        required
      />
      <label for="betreff" class="text-gray-400 font-bold">{{
        LanguageStore.textObj.form.email.label
      }}</label>

      <input
        type="text"
        name="email"
        :placeholder="LanguageStore.textObj.form.email.placeholder"
        class="outline-none focus:border-stone-800 focus:shadow-lg dark:focus:dark:shadow-stone-700 dark:focus:border-stone-300 bg-[#f3f3f5] dark:bg-[#2B2B2F] text-stone-500 dark:text-[#EAEAEA] p-2 ps-5 rounded-lg border border-stone-300 dark:border-stone-600"
        required
      />

      <label for="nachricht" class="text-gray-400 font-bold">{{
        LanguageStore.textObj.form.message.label
      }}</label>
      <textarea
        :placeholder="LanguageStore.textObj.form.message.placeholder"
        name="message"
        class="outline-none focus:border-stone-800 focus:shadow-lg dark:focus:dark:shadow-stone-700 dark:focus:border-stone-300 bg-[#f3f3f5] dark:bg-[#2B2B2F] text-stone-500 dark:text-[#EAEAEA] p-2 ps-5 rounded-lg border border-stone-300 dark:border-stone-600 resize-none scrollbar-hide"
        required
      ></textarea>

      <button
        type="submit"
        class="flex gap-3 p-2 rounded-lg bg-[#FF8C40] dark:bg-[#fe9046] text-white dark:text-[#191919] text-center hover:bg-stone-200 dark:hover:bg-[#ffb888] hover:text-black transition-all duration-500 justify-center cursor-pointer w-full"
      >
        {{ LanguageStore.textObj.form.button }}
      </button>
    </form>
  </div>
</template>
<style scoped>
.slide-formular {
  animation-name: slide-formular;
  animation-duration: 1s;
}

@keyframes slide-formular {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (min-width: 1280px) {
  @keyframes slide-formular {
    0% {
      transform: translate(350px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
}

@media only screen and (min-width: 1400px) {
  form {
    height: max;
  }
}

@media only screen and (min-width: 1900px) {
  form {
    height: max;
  }
  .contact-container {
    padding: 90px;
  }
}
</style>
