<script setup></script>

<template>
  <section
    id="responsive"
    class="text-white h-screen bild w-full flex flex-col">
    <div
      class="flex flex-col items-center pt-25 text-4xl text-center xl:text-6xl">
      Responsive Design
    </div>
    <div class="w-full h-full flex flex-col md:flex-row p-10">
      <div class="w-full flex flex-col items-center gap-2 lg:gap-20 xl:gap-20">
        <div class="w-full xl:w-1/2 xl:self-baseline text-sm lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas modi
          praesentium assumenda cupiditate esse numquam. Dolorem omnis
          laudantium magnam fugit? Voluptate temporibus amet architecto dolores
          beatae aliquam laborum itaque dolorem?
        </div>
        <div
          class="w-full xl:w-1/2 lg:p-6 flex flex-col lg:flex-row items-center justify-center xl:gap-15">
          <img
            src="../assets/img/mac.png"
            alt=""
            class="sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-3/4 -translate-y-15 md:-translate-y-20 lg:-translate-y-0 xl:-translate-y-15" />
          <img
            src="../assets/img/iphone.png"
            alt=""
            class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-2/3 -translate-y-25 sm:-translate-y-30 md:-translate-y-40 lg:-translate-y-15 xl:-translate-y-35" />
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
