<script setup>
import ResponsiveIphone from "@/components/ResponsiveIphone.vue";
import ResponsiveMac from "@/components/ResponsiveMac.vue";
import TextElement from "@/components/TextElement.vue";
import TheHeading from "@/components/TheHeading.vue";
</script>

<template>
  <section
    id="responsive"
    class="text-white h-screen bild w-full flex flex-col">
    <TheHeading
      class="flex flex-col items-center pt-25 text-4xl text-center xl:text-6xl"
      >Responsive Design</TheHeading
    >
    <div class="w-full h-full flex flex-col md:flex-row p-10">
      <div class="w-full flex flex-col items-center gap-2 lg:gap-20 xl:gap-0">
        <TextElement
          class="w-full xl:w-1/2 xl:self-baseline text-sm lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas modi
          praesentium assumenda cupiditate esse numquam. Dolorem omnis
          laudantium magnam fugit? Voluptate temporibus amet architecto dolores
          beatae aliquam laborum itaque dolorem?
        </TextElement>
        <div class="flex xl:h-1/2">
          <ResponsiveMac class="-translate-y-10">
            <img src="../assets/img/mac.png" alt="" class="xl:w-180" />
          </ResponsiveMac>

          <ResponsiveIphone class="">
            <img src="../assets/img/iphone.png" alt="" class="xl:w-150" />
          </ResponsiveIphone>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bild {
  background-image: url(../assets/img/backgrounds/responsive.png);
  background-position: center;
  background-size: cover;
}
</style>
