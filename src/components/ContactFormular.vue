<script setup>
import { onMounted, ref } from "vue";
import { useLanguageStore } from "@/stores/language";

const LanguageStore = useLanguageStore();

const formular = ref(false);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.9) {
      // Add the animation class
      entries[0].target.classList.add("slide-formular");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("slide-formular");
  });

  // Tell the observer which elements to track
  observer.observe(formular.value);
});
</script>
<template>
  <div ref="formular">
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="w-full flex flex-col gap-4 p-3 md:p-4 bg-inputbox rounded-2xl shadow-xl shadow-stone-600">
      <input
        type="hidden"
        name="access_key"
        value="9b46dc84-bc0b-430d-8998-984d161363d0" />

      <label for="name" class="text-stone-300">
        {{ LanguageStore.textObj.form.name.label }}</label
      >
      <input
        type="text"
        name="name"
        :placeholder="LanguageStore.textObj.form.name.placeholder"
        class="bg-dunkelgrau text-stone-400 p-2 px-5 rounded-lg"
        required />
      <label for="betreff" class="text-stone-300">{{
        LanguageStore.textObj.form.email.label
      }}</label>
      <input
        type="text"
        name="email"
        :placeholder="LanguageStore.textObj.form.email.placeholder"
        class="bg-dunkelgrau text-stone-400 p-2 ps-5 rounded-lg"
        required />

      <label for="nachricht" class="text-stone-300">{{
        LanguageStore.textObj.form.message.label
      }}</label>
      <textarea
        :placeholder="LanguageStore.textObj.form.message.placeholder"
        name="message"
        class="bg-dunkelgrau text-stone-400 p-2 ps-5 rounded-lg resize-none"
        required></textarea>

      <button
        type="submit"
        class="flex gap-3 p-2 rounded-lg bg-white text-stone-600 cursor-pointer w-max hover:text-white hover:bg-stone-500 hover:duration-300 not-focus:duration-300">
        {{ LanguageStore.textObj.form.button }}
        <i class="bi bi-envelope-plus-fill"></i>
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
</style>
