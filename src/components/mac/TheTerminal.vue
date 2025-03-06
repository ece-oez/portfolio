<script setup>
import { ref, onMounted } from "vue";
import ThreeDots from "./ThreeDots.vue";

const parentElement = ref(null);

onMounted(() => {
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0.8) {
      // Add the animation class
      entries[0].target.classList.add("pop-terminal");
      entries[0].target.classList.remove("scale-0");
      return;
    }
    entries[0].target.classList.add("scale-0");
    entries[0].target.classList.remove("pop-terminal");
  });

  // Tell the observer which elements to track
  observer.observe(parentElement.value);
});
</script>
<template>
  <div
    ref="parentElement"
    class="bg-black w-[95%] lg:w-[50%] h-[20%] xl:h-[30%] flex flex-col rounded-2xl shadow-lg shadow-neutral-700 border-double border-3 border-stone-500">
    <div
      class="bg-stone-700 flex justify-between items-center p-1 rounded-t-2xl">
      <ThreeDots />

      <div
        class="hidden w-full xl:flex items-center justify-center gap-1 font-bold text-stone-300 select-none">
        <img src="../../assets/img/ordner.png" class="w-4 h-4" alt="" />
        users/eceoezmen/documents/portfolio
      </div>

      <ThreeDots class="invisible" />
    </div>

    <h1 aria-label="I'm a developer" class="noto-sans">
      I'm a&nbsp;<span class="typewriter xl:thick"></span>
    </h1>
  </div>
</template>
<style scoped>
.pop-terminal {
  animation-name: pop-terminal;
  animation-duration: 1s;
}

@keyframes pop-terminal {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  85% {
    transform: scale(0.8);
  }
  90% {
    transform: scale(1);
  }
  95% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.terminal-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
h1 {
  font-size: 9vmin;
  color: white;
  text-align: left;
  /* font-family: Lato, sans-serif; */
  font-weight: 400;
  margin: 1rem 0 1rem 2rem;
}

/* Typewriter effect 1 */
@keyframes typing {
  0.0000%,
  27.3488% {
    content: "";
  }
  1.1395%,
  26.2093% {
    content: "d";
  }
  2.2791%,
  25.0698% {
    content: "de";
  }
  3.4186%,
  23.9302% {
    content: "dev";
  }
  4.5581%,
  22.7907% {
    content: "deve";
  }
  5.6977%,
  21.6512% {
    content: "devel";
  }
  6.8372%,
  20.5116% {
    content: "develo";
  }
  7.9767%,
  19.3721% {
    content: "develop";
  }
  9.1163%,
  18.2326% {
    content: "develope";
  }
  10.2558%,
  17.0930% {
    content: "developer";
  }

  30.7674%,
  55.8371% {
    content: "";
  }
  31.9070%,
  54.6976% {
    content: "d";
  }
  33.0465%,
  53.5581% {
    content: "de";
  }
  34.1860%,
  52.4186% {
    content: "des";
  }
  35.3256%,
  51.2791% {
    content: "desi";
  }
  36.4651%,
  50.1395% {
    content: "desig";
  }
  37.6047%,
  49.0000% {
    content: "design";
  }
  38.7442%,
  47.8605% {
    content: "designe";
  }
  39.8837%,
  46.7209% {
    content: "designer";
  }

  /* 54.69... erhöhen */

  54.6977%,
  75.2093% {
    content: "";
  }
  55.8372%,
  74.0698% {
    content: "t";
  }
  56.9767%,
  72.9302% {
    content: "te";
  }
  58.1163%,
  71.7907% {
    content: "tes";
  }
  59.2558%,
  70.6512% {
    content: "test";
  }
  60.3953%,
  69.5116% {
    content: "teste";
  }
  61.5349%,
  68.3721% {
    content: "tester";
  }

  78.6279%,
  96.8605% {
    content: "";
  }
  79.7674%,
  95.7209% {
    content: "h";
  }
  80.9070%,
  94.5814% {
    content: "hu";
  }
  82.0465%,
  93.4419% {
    content: "hum";
  }
  83.1860%,
  92.3023% {
    content: "huma";
  }
  84.3256%,
  91.1628% {
    content: "human";
  }
}

/* Blinkender Cursor: von 0 bis 100 visible, aber bei 50 invisible */

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.typewriter {
  --caret: currentcolor;
}

.typewriter::before {
  content: "";
  animation: typing 13.5s infinite;
}

.typewriter::after {
  content: "";
  border-right: 1px solid var(--caret);
  animation: blink 0.5s linear infinite;
}

.typewriter.thick::after {
  border-right: 1ch solid var(--caret);
}

.typewriter.nocaret::after {
  border-right: 0;
}

@media (prefers-reduced-motion) {
  .typewriter::after {
    animation: none;
  }

  @keyframes sequencePopup {
    0%,
    100% {
      content: "developer";
    }
    25% {
      content: "designer";
    }
    50% {
      content: "tester";
    }
    75% {
      content: "engineer";
    }
  }

  .typewriter::before {
    content: "developer";
    animation: sequencePopup 12s linear infinite;
  }
}
</style>
