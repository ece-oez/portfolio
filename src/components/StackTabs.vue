<script setup>
import { ref } from "vue";

let currentTab = ref("tab1");
</script>

<template>
  <div class="w-2/4 flex flex-col gap-6 mac-shadow rounded-3xl p-5">
    <div class="w-full h-10 flex justify-around items-center gap-5">
      <div class="flex justify-around items-center w-1/3 gap-4">
        <div class="pl-1 flex gap-2">
          <div class="bg-red-500 w-4 h-4 rounded-full"></div>
          <div class="bg-yellow-500 w-4 h-4 rounded-full"></div>
          <div class="bg-green-500 w-4 h-4 rounded-full"></div>
        </div>

        <div class="flex justify-around items-center gap-1.5">
          <i class="bi bi-layout-text-window"></i>
          <i class="bi bi-caret-down"></i>
        </div>

        <div class="flex justify-around items-center gap-6">
          <i class="bi bi-caret-left"></i>
          <i class="bi bi-caret-right"></i>
        </div>

        <div class="flex justify-end">
          <i class="bi bi-shield-shaded"></i>
        </div>
      </div>
      <div class="bg-stone-300 flex justify-between rounded-md w-3/6 p-0.5">
        <div class="w-full flex justify-center gap-1">
          <i class="bi bi-lock-fill"></i>
          {{ currentTab }}
        </div>
        <i class="bi bi-arrow-clockwise pe-2"></i>
      </div>

      <div class="flex justify-end items-center gap-4 w-1/3">
        <i class="bi bi-box-arrow-up"></i>
        <i class="bi bi-plus-lg"></i>

        <div class="flex flex-col gap-0.5">
          <div class="flex gap-0.5">
            <div class="border border-stone-500 w-2 h-2"></div>
            <div class="border border-stone-500 w-2 h-2"></div>
          </div>
          <div class="flex gap-0.5">
            <div class="border border-stone-500 w-2 h-2"></div>
            <div class="border border-stone-500 w-2 h-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-3">
      <div
        @click="currentTab = 'tab1'"
        class="bg-stone-200 w-full h-10 rounded-lg flex justify-start items-center gap-2 ps-1 select-none cursor-pointer"
        :class="{ 'bg-stone-300': currentTab === 'tab1' }">
        <img src="../assets/img/hallo.png" class="w-7" alt="" />
        tab1
      </div>
      <div
        @click="currentTab = 'tab2'"
        class="bg-stone-200 w-full h-10 rounded-lg flex justify-start items-center gap-2 ps-1 select-none cursor-pointer"
        :class="{ 'bg-stone-300': currentTab === 'tab2' }">
        <img src="../assets/img/work-life-balance.png" class="w-7" alt="" />

        tab2
      </div>
      <div
        @click="currentTab = 'tab3'"
        class="bg-stone-200 w-full h-10 rounded-lg flex justify-start items-center gap-2 ps-1 select-none cursor-pointer"
        :class="{ 'bg-stone-300': currentTab === 'tab3' }">
        <img src="../assets/img/werdegang.png" class="w-7" alt="" />
        tab3
      </div>
      <div
        @click="currentTab = 'tab4'"
        class="bg-stone-200 w-full h-10 rounded-lg flex justify-start items-center gap-2 ps-1 select-none cursor-pointer"
        :class="{ 'bg-stone-300': currentTab === 'tab4' }">
        <img src="../assets/img/zukunft.png" class="w-7" alt="" />
        tab4
      </div>
    </div>

    <div v-if="currentTab === 'tab1'" class="w-full h-full">
      <h2>Wer bin ich?</h2>
      <h3>
        Ich schreibe Code, trinke Tee und behebe Bugs manchmal sogar in dieser
        Reihenfolge. Seit 2022 entwickle ich Webanwendungen mit HTML, CSS und
        Javascript und ich liebe es, digitale Lösungen zu gestalten.
      </h3>
    </div>

    <div
      v-if="currentTab === 'tab2'"
      class="w-full h-full rounded-b-xl rounded-e-xl">
      <h2>Was mache ich?</h2>
      <h3>
        Mein Tech-Stack umfasst Vue.js und TailwindCSS für ein schlankes,
        performantes Frontend. Im Backend arbeite ich mit Node.js für
        skalierbare Web-apps, PHP für klassische Webentwicklung und C# für
        enterprise-Anwendungen. Mit MariaDB und SQL erstelle ich robuste
        relationale Datenbanken, optimiere Queries und Implementiere sichere
        Datenstrukturen.
      </h3>
    </div>

    <div
      v-if="currentTab === 'tab3'"
      class="w-full h-full rounded-b-xl rounded-e-xl">
      <h2>Beruflicher Werdegang?</h2>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quam ab
        iste sunt dolore, id velit repudiandae aperiam iusto labore doloribus
        error eaque temporibus nihil consequatur unde. Obcaecati, rerum quo.
      </h3>
    </div>
    <div
      v-if="currentTab === 'tab4'"
      class="w-full h-full rounded-b-xl rounded-e-xl">
      <h2>Wo sehe ich mich in Zukunft?</h2>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quam ab
        iste sunt dolore, id velit repudiandae aperiam iusto labore doloribus
        error eaque temporibus nihil consequatur unde. Obcaecati, rerum quo.
      </h3>
    </div>
  </div>
</template>
<style scoped>
.mac-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
</style>
