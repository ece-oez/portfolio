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

const name = ref(null);
const subject = ref(null);
const message = ref(null);
</script>
<template>
  <div ref="formular">
    <form
      class="w-full flex flex-col gap-4 p-3 md:p-4 bg-inputbox rounded-2xl shadow-xl shadow-stone-600">
      <label for="name" class="text-stone-300">
        {{ LanguageStore.textObj.form.name.label }}</label
      >
      <input
        ref="name"
        type="text"
        :placeholder="LanguageStore.textObj.form.name.placeholder"
        class="bg-dunkelgrau text-stone-400 p-2 px-5 rounded-lg" />
      <label for="betreff" class="text-stone-300">{{
        LanguageStore.textObj.form.subject.label
      }}</label>
      <input
        ref="subject"
        type="text"
        :placeholder="LanguageStore.textObj.form.subject.placeholder"
        class="bg-dunkelgrau text-stone-400 p-2 ps-5 rounded-lg" />

      <label for="nachricht" class="text-stone-300">{{
        LanguageStore.textObj.form.message.label
      }}</label>
      <textarea
        ref="message"
        id="subject"
        :placeholder="LanguageStore.textObj.form.message.placeholder"
        style="height: 150px"
        class="bg-dunkelgrau text-stone-400 p-2 ps-5 rounded-lg resize-none"></textarea>

      <a
        href="mailto:someone@example.com?cc=someoneelse@example.com&bcc=andsomeoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!"
        class="flex gap-3 p-2 rounded-lg bg-white text-stone-600 cursor-pointer w-max">
        {{ LanguageStore.textObj.form.button }}
        <i class="bi bi-envelope-plus-fill"></i>
      </a>
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
