<script setup>
import { onMounted, ref } from "vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();
</script>
<template>
  <div class="w-full h-max">
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="w-full h-max flex flex-col gap-5 p-5 rounded-xl border-1 border-gray-200 shadow-md"
    >
      <input
        type="hidden"
        name="access_key"
        value="9b46dc84-bc0b-430d-8998-984d161363d0"
      />

      <!-- <input
        type="hidden"
        name="access_key"
        :value="process.env.WEB3FORMS_ACCESS_KEY"
      /> -->

      <label for="name" class="text-gray-400 font-bold">
        {{ LanguageStore.textObj.form.name.label }}</label
      >
      <input
        type="text"
        name="name"
        :placeholder="LanguageStore.textObj.form.name.placeholder"
        class="bg-[#f3f3f5] text-gray-500 p-2 px-5 rounded-lg border-1 border-gray-200"
        required
      />
      <label for="betreff" class="text-gray-400 font-bold">{{
        LanguageStore.textObj.form.email.label
      }}</label>

      <input
        type="text"
        name="email"
        :placeholder="LanguageStore.textObj.form.email.placeholder"
        class="bg-[#f3f3f5] text-gray-500 p-2 ps-5 rounded-lg border-1 border-gray-200"
        required
      />

      <label for="nachricht" class="text-gray-400 font-bold">{{
        LanguageStore.textObj.form.message.label
      }}</label>
      <textarea
        :placeholder="LanguageStore.textObj.form.message.placeholder"
        name="message"
        class="bg-[#f3f3f5] text-gray-500 p-2 ps-5 rounded-lg resize-none scrollbar-hide"
        required
      ></textarea>

      <button
        type="submit"
        class="flex gap-3 p-2 rounded-lg bg-[#FF8C40] text-white text-center justify-center cursor-pointer w-full hover:text-white hover:bg-stone-500 hover:duration-300 not-focus:duration-300"
      >
        <i class="bi bi-envelope-plus-fill"></i>
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
