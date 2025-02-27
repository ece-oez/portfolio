<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  icon: String,
  text: String,
  iconWidth: String,
  textWidth: String,
});

const parentElement = ref(null);
const showIcon = ref(true);
const showText = ref(false);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.9) {
      // Add the animation class
      entries[0].target.classList.add("pop-up");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("pop-up");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});

function flipBubble() {
  parentElement.value.classList.remove("pop-up");
  parentElement.value.classList.add("flip-bubble");
  setTimeout(() => {
    showIcon.value = !showIcon.value;
    showText.value = !showText.value;
  }, 500);
  setTimeout(() => {
    parentElement.value.classList.remove("flip-bubble");
  }, 1000);
}
</script>
<template>
  <div
    ref="parentElement"
    @click="flipBubble()"
    class="rounded-full items-center flex flex-row justify-center gap-3 sphere-shadow-light-top">
    <div class="text-neutral-400 text-center">
      <div v-show="showIcon" :class="props.iconWidth">
        <i :class="props.icon"></i>
      </div>

      <div v-show="showText" :class="props.textWidth">
        <span class="select-none">
          {{ props.text }}
        </span>
      </div>

      <slot> </slot>
    </div>
  </div>
</template>
<style scoped>
.sphere-shadow-dark-top {
  box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
    rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
    rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
    rgba(213, 213, 213, 0.06) 0px 2px 1px, rgba(189, 189, 189, 0.09) 0px 4px 2px,
    rgba(112, 112, 112, 0.09) 0px 8px 4px, rgba(64, 64, 64, 0.09) 0px 16px 8px,
    rgba(81, 81, 81, 0.09) 0px 32px 16px;
}

.sphere-shadow-light-top {
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.sphere-shadow-light-bottom {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

@keyframes pop-up {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes flip {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.flip-bubble {
  animation-name: flip;
  animation-duration: 1s;
}

.pop-up {
  animation-name: pop-up;
  animation-duration: 3s;
}
</style>
